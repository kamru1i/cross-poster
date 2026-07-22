// ==========================================================================
// OPEN SOCIAL CROSS-POSTER - CLIENT APPLICATION LOGIC
// ==========================================================================

const CURRENT_USER_ID = 'usr_demo_1';

// Application State
let appState = {
  accounts: [],
  selectedAccountIds: [],
  postContent: '',
  mediaFiles: [], // [{ url, type }]
  ytTitle: '',
  igHashtags: '',
  activeFilter: 'ALL',
  activePreviewPlatform: 'FB'
};

// DOM Element References
const DOM = {
  // Lists & Containers
  accountsList: document.getElementById('accountsList'),
  targetAccountChips: document.getElementById('targetAccountChips'),
  mediaPreviewGrid: document.getElementById('mediaPreviewGrid'),
  
  // Counters
  statConnectedCount: document.getElementById('statConnectedCount'),
  statSelectedCount: document.getElementById('statSelectedCount'),
  charCountGeneral: document.getElementById('charCountGeneral'),
  
  // Post Composer Inputs
  postContent: document.getElementById('postContent'),
  dropzone: document.getElementById('dropzone'),
  mediaInput: document.getElementById('mediaInput'),
  uploadProgress: document.getElementById('uploadProgress'),
  progressFill: document.getElementById('progressFill'),
  progressText: document.getElementById('progressText'),
  ytTitle: document.getElementById('ytTitle'),
  igHashtags: document.getElementById('igHashtags'),
  
  // Action Buttons
  btnSelectAllAccounts: document.getElementById('btnSelectAllAccounts'),
  btnDeselectAllAccounts: document.getElementById('btnDeselectAllAccounts'),
  btnPublishNow: document.getElementById('btnPublishNow'),
  btnToggleCustomFields: document.getElementById('btnToggleCustomFields'),
  customFieldsPanel: document.getElementById('customFieldsPanel'),
  
  // Modals
  modalAddAccount: document.getElementById('modalAddAccount'),
  btnAddAccount: document.getElementById('btnAddAccount'),
  btnCancelAddAccount: document.getElementById('btnCancelAddAccount'),
  btnCloseAddAccount: document.getElementById('btnCloseAddAccount'),
  btnSaveNewAccount: document.getElementById('btnSaveNewAccount'),
  
  modalSettings: document.getElementById('modalSettings'),
  btnOpenSettings: document.getElementById('btnOpenSettings'),
  btnCancelSettings: document.getElementById('btnCancelSettings'),
  btnCloseSettings: document.getElementById('btnCloseSettings'),
  btnSaveSettings: document.getElementById('btnSaveSettings'),
  
  modalHistory: document.getElementById('modalHistory'),
  btnOpenHistory: document.getElementById('btnOpenHistory'),
  btnCloseHistory: document.getElementById('btnCloseHistory'),
  historyLogsContainer: document.getElementById('historyLogsContainer'),
  
  // Preview Elements
  fbBodyPreview: document.getElementById('fbBodyPreview'),
  fbMediaPreview: document.getElementById('fbMediaPreview'),
  igBodyPreview: document.getElementById('igBodyPreview'),
  igMediaPreview: document.getElementById('igMediaPreview'),
  ytMediaPreview: document.getElementById('ytMediaPreview'),
  ytTitlePreview: document.getElementById('ytTitlePreview'),
  xBodyPreview: document.getElementById('xBodyPreview'),
  xMediaPreview: document.getElementById('xMediaPreview'),
  threadsBodyPreview: document.getElementById('threadsBodyPreview'),
  threadsMediaPreview: document.getElementById('threadsMediaPreview')
};

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  fetchAccounts();
  setupEventListeners();
  updateLivePreview();
});

// --- API FETCH PROCEDURES ---
async function fetchAccounts() {
  try {
    const res = await fetch(`/api/accounts/${CURRENT_USER_ID}`);
    const data = await res.json();
    if (data.success) {
      appState.accounts = data.accounts;
      // Default: select all enabled accounts
      appState.selectedAccountIds = appState.accounts
        .filter(a => a.isEnabled)
        .map(a => a.id);
      renderAccountsList();
      renderTargetAccountChips();
      updateStats();
    }
  } catch (err) {
    console.error('Failed to fetch accounts:', err);
  }
}

// --- RENDER FUNCTIONS ---
function renderAccountsList() {
  DOM.accountsList.innerHTML = '';
  
  const filteredAccounts = appState.accounts.filter(acc => {
    if (appState.activeFilter === 'ALL') return true;
    if (appState.activeFilter === 'META') return acc.platform === 'FB_PAGE' || acc.platform === 'FB_PROFILE' || acc.platform === 'INSTAGRAM';
    if (appState.activeFilter === 'YOUTUBE') return acc.platform === 'YOUTUBE';
    if (appState.activeFilter === 'X') return acc.platform === 'X_TWITTER' || acc.platform === 'THREADS';
    return true;
  });

  filteredAccounts.forEach(acc => {
    const isSelected = appState.selectedAccountIds.includes(acc.id);
    const card = document.createElement('div');
    card.className = 'account-card-item';
    
    let platformClass = 'bg-fb';
    let iconClass = 'fa-facebook';
    if (acc.platform === 'INSTAGRAM') { platformClass = 'bg-ig'; iconClass = 'fa-instagram'; }
    if (acc.platform === 'YOUTUBE') { platformClass = 'bg-yt'; iconClass = 'fa-youtube'; }
    if (acc.platform === 'X_TWITTER') { platformClass = 'bg-x'; iconClass = 'fa-x-twitter'; }
    if (acc.platform === 'THREADS') { platformClass = 'bg-threads'; iconClass = 'fa-at'; }

    card.innerHTML = `
      <div class="acc-avatar-wrap">
        <img src="${acc.avatarUrl}" class="acc-avatar" alt="${acc.accountName}">
        <div class="platform-badge-icon ${platformClass}">
          <i class="fa-brands ${iconClass}"></i>
        </div>
      </div>
      <div class="acc-details">
        <span class="acc-name">${acc.accountName}</span>
        <span class="acc-handle">${acc.accountHandle || acc.platformName}</span>
      </div>
      <label class="switch">
        <input type="checkbox" data-id="${acc.id}" ${isSelected ? 'checked' : ''}>
        <span class="slider"></span>
      </label>
    `;

    // Toggle Checkbox event listener
    const checkbox = card.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', (e) => {
      const accId = e.target.getAttribute('data-id');
      if (e.target.checked) {
        if (!appState.selectedAccountIds.includes(accId)) {
          appState.selectedAccountIds.push(accId);
        }
      } else {
        appState.selectedAccountIds = appState.selectedAccountIds.filter(id => id !== accId);
      }
      renderTargetAccountChips();
      updateStats();
    });

    DOM.accountsList.appendChild(card);
  });
}

function renderTargetAccountChips() {
  DOM.targetAccountChips.innerHTML = '';
  
  if (appState.selectedAccountIds.length === 0) {
    DOM.targetAccountChips.innerHTML = '<span style="font-size:12px; color:var(--text-muted);">No accounts selected</span>';
    return;
  }

  appState.selectedAccountIds.forEach(id => {
    const acc = appState.accounts.find(a => a.id === id);
    if (acc) {
      const chip = document.createElement('span');
      chip.className = 'account-chip';
      chip.innerHTML = `${acc.accountName} <i class="fa-solid fa-xmark" data-id="${acc.id}" style="cursor:pointer;"></i>`;
      
      chip.querySelector('.fa-xmark').addEventListener('click', (e) => {
        const accId = e.target.getAttribute('data-id');
        appState.selectedAccountIds = appState.selectedAccountIds.filter(i => i !== accId);
        renderAccountsList();
        renderTargetAccountChips();
        updateStats();
      });

      DOM.targetAccountChips.appendChild(chip);
    }
  });
}

function updateStats() {
  DOM.statConnectedCount.textContent = appState.accounts.length;
  DOM.statSelectedCount.textContent = appState.selectedAccountIds.length;
  DOM.btnPublishNow.querySelector('span').textContent = `Publish Everywhere Now (${appState.selectedAccountIds.length})`;
}

// --- EVENT LISTENERS SETUP ---
function setupEventListeners() {

  // Platform Filter Pills
  document.querySelectorAll('.filter-pill').forEach(pill => {
    pill.addEventListener('click', (e) => {
      document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
      e.target.classList.add('active');
      appState.activeFilter = e.target.getAttribute('data-filter');
      renderAccountsList();
    });
  });

  // Select / Deselect All
  DOM.btnSelectAllAccounts.addEventListener('click', () => {
    appState.selectedAccountIds = appState.accounts.map(a => a.id);
    renderAccountsList();
    renderTargetAccountChips();
    updateStats();
  });

  DOM.btnDeselectAllAccounts.addEventListener('click', () => {
    appState.selectedAccountIds = [];
    renderAccountsList();
    renderTargetAccountChips();
    updateStats();
  });

  // Text Area Live Input
  DOM.postContent.addEventListener('input', (e) => {
    appState.postContent = e.target.value;
    DOM.charCountGeneral.textContent = `${appState.postContent.length} chars`;
    updateLivePreview();
  });

  DOM.ytTitle.addEventListener('input', (e) => {
    appState.ytTitle = e.target.value;
    updateLivePreview();
  });

  // Accordion Toggle
  DOM.btnToggleCustomFields.addEventListener('click', () => {
    const isHidden = DOM.customFieldsPanel.style.display === 'none';
    DOM.customFieldsPanel.style.display = isHidden ? 'block' : 'none';
  });

  // Dropzone File Upload
  DOM.dropzone.addEventListener('click', () => DOM.mediaInput.click());
  
  DOM.dropzone.addEventListener('dragover', (e) => {
    e.preventDefault();
    DOM.dropzone.style.borderColor = 'var(--accent-primary)';
  });

  DOM.dropzone.addEventListener('dragleave', () => {
    DOM.dropzone.style.borderColor = 'rgba(255,255,255,0.15)';
  });

  DOM.dropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    DOM.dropzone.style.borderColor = 'rgba(255,255,255,0.15)';
    if (e.dataTransfer.files.length) {
      handleFilesUpload(e.dataTransfer.files);
    }
  });

  DOM.mediaInput.addEventListener('change', (e) => {
    if (e.target.files.length) {
      handleFilesUpload(e.target.files);
    }
  });

  // Preview Tabs Switcher
  document.querySelectorAll('.prev-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      document.querySelectorAll('.prev-tab').forEach(t => t.classList.remove('active'));
      const targetBtn = e.target.closest('.prev-tab');
      targetBtn.classList.add('active');
      
      const platform = targetBtn.getAttribute('data-platform');
      document.querySelectorAll('.preview-mockup').forEach(m => m.style.display = 'none');
      
      const targetMockup = document.getElementById(`preview${platform}`);
      if (targetMockup) targetMockup.style.display = 'flex';
    });
  });

  // Modal Open/Close handlers
  DOM.btnAddAccount.addEventListener('click', () => DOM.modalAddAccount.style.display = 'flex');
  DOM.btnCancelAddAccount.addEventListener('click', () => DOM.modalAddAccount.style.display = 'none');
  DOM.btnCloseAddAccount.addEventListener('click', () => DOM.modalAddAccount.style.display = 'none');
  
  DOM.btnSaveNewAccount.addEventListener('click', handleSaveNewAccount);

  DOM.btnOpenSettings.addEventListener('click', () => DOM.modalSettings.style.display = 'flex');
  DOM.btnCancelSettings.addEventListener('click', () => DOM.modalSettings.style.display = 'none');
  DOM.btnCloseSettings.addEventListener('click', () => DOM.modalSettings.style.display = 'none');
  DOM.btnSaveSettings.addEventListener('click', () => {
    alert('BYOK Key credentials saved securely!');
    DOM.modalSettings.style.display = 'none';
  });

  DOM.btnOpenHistory.addEventListener('click', fetchAuditLogs);
  DOM.btnCloseHistory.addEventListener('click', () => DOM.modalHistory.style.display = 'none');

  // PUBLISH NOW ACTION
  DOM.btnPublishNow.addEventListener('click', handlePublishNow);
}

// --- FILE UPLOAD HANDLER ---
async function handleFilesUpload(files) {
  DOM.uploadProgress.style.display = 'block';
  DOM.progressFill.style.width = '30%';
  DOM.progressText.textContent = 'Uploading media stream... 30%';

  const formData = new FormData();
  for (let i = 0; i < files.length; i++) {
    formData.append('files', files[i]);
  }

  try {
    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData
    });
    const data = await res.json();

    DOM.progressFill.style.width = '100%';
    DOM.progressText.textContent = 'Upload Complete!';
    
    setTimeout(() => {
      DOM.uploadProgress.style.display = 'none';
    }, 1000);

    if (data.success) {
      data.urls.forEach(url => {
        appState.mediaFiles.push({
          url,
          isVideo: url.endsWith('.mp4') || url.endsWith('.mov') || url.endsWith('.webm')
        });
      });
      renderMediaPreviews();
      updateLivePreview();
    }
  } catch (err) {
    console.error('File upload error:', err);
    DOM.progressText.textContent = 'Upload failed.';
  }
}

function renderMediaPreviews() {
  DOM.mediaPreviewGrid.innerHTML = '';
  appState.mediaFiles.forEach((file, index) => {
    const box = document.createElement('div');
    box.className = 'preview-thumb-box';
    
    if (file.isVideo) {
      box.innerHTML = `<video src="${file.url}" controls></video>`;
    } else {
      box.innerHTML = `<img src="${file.url}">`;
    }
    
    const removeBtn = document.createElement('button');
    removeBtn.className = 'btn-remove-media';
    removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    removeBtn.onclick = () => {
      appState.mediaFiles.splice(index, 1);
      renderMediaPreviews();
      updateLivePreview();
    };

    box.appendChild(removeBtn);
    DOM.mediaPreviewGrid.appendChild(box);
  });
}

// --- LIVE PREVIEW UPDATER ---
function updateLivePreview() {
  const text = appState.postContent || 'Post content will preview here in real-time...';
  const ytTitle = appState.ytTitle || appState.postContent.slice(0, 50) || 'YouTube Video / Shorts Title';

  // FB Preview
  DOM.fbBodyPreview.textContent = text;
  DOM.fbMediaPreview.innerHTML = renderMediaHtml(appState.mediaFiles);

  // IG Preview
  DOM.igBodyPreview.innerHTML = `<strong>kamrul_tech_creator</strong> ${text} ${appState.igHashtags}`;
  DOM.igMediaPreview.innerHTML = renderMediaHtml(appState.mediaFiles);

  // YT Preview
  DOM.ytTitlePreview.textContent = ytTitle;
  if (appState.mediaFiles.length) {
    DOM.ytMediaPreview.style.backgroundImage = `url(${appState.mediaFiles[0].url})`;
    DOM.ytMediaPreview.style.backgroundSize = 'cover';
  }

  // X Preview
  DOM.xBodyPreview.textContent = text;
  DOM.xMediaPreview.innerHTML = renderMediaHtml(appState.mediaFiles);

  // Threads Preview
  DOM.threadsBodyPreview.textContent = text;
  DOM.threadsMediaPreview.innerHTML = renderMediaHtml(appState.mediaFiles);
}

function renderMediaHtml(files) {
  if (!files.length) return '';
  const first = files[0];
  if (first.isVideo) {
    return `<video src="${first.url}" autoplay loop muted></video>`;
  }
  return `<img src="${first.url}">`;
}

// --- ADD NEW ACCOUNT ---
async function handleSaveNewAccount() {
  const platform = document.getElementById('newAccPlatform').value;
  const name = document.getElementById('newAccName').value;
  const handle = document.getElementById('newAccHandle').value;

  if (!name) {
    alert('Please enter account name');
    return;
  }

  try {
    const res = await fetch('/api/accounts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: CURRENT_USER_ID,
        platform,
        platformName: platform,
        accountName: name,
        accountHandle: handle
      })
    });
    const data = await res.json();
    if (data.success) {
      DOM.modalAddAccount.style.display = 'none';
      fetchAccounts();
    }
  } catch (err) {
    console.error('Failed to add account:', err);
  }
}

// --- BROADCAST PUBLISH ENGINE ---
async function handlePublishNow() {
  if (!appState.postContent && appState.mediaFiles.length === 0) {
    alert('Please enter post content or attach media!');
    return;
  }
  if (appState.selectedAccountIds.length === 0) {
    alert('Please select at least one account to post!');
    return;
  }

  DOM.btnPublishNow.disabled = true;
  DOM.btnPublishNow.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> <span>Publishing Everywhere...</span>';

  try {
    const res = await fetch('/api/posts/publish', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: CURRENT_USER_ID,
        content: appState.postContent,
        mediaUrls: appState.mediaFiles.map(m => m.url),
        targetAccountIds: appState.selectedAccountIds,
        customPlatformTexts: {
          ytTitle: appState.ytTitle,
          igHashtags: appState.igHashtags
        }
      })
    });

    const data = await res.json();
    
    if (data.success) {
      alert(`🎉 ${data.message}`);
      DOM.postContent.value = '';
      appState.postContent = '';
      appState.mediaFiles = [];
      renderMediaPreviews();
      updateLivePreview();
      fetchAuditLogs();
    }
  } catch (err) {
    console.error('Publish error:', err);
    alert('Failed to publish post. Check console logs.');
  } finally {
    DOM.btnPublishNow.disabled = false;
    DOM.btnPublishNow.innerHTML = '<i class="fa-solid fa-bolt"></i> <span>Publish Everywhere Now</span>';
    updateStats();
  }
}

// --- AUDIT LOGS FETCH & RENDER ---
async function fetchAuditLogs() {
  DOM.modalHistory.style.display = 'flex';
  DOM.historyLogsContainer.innerHTML = '<div style="text-align:center; padding:20px;"><i class="fa-solid fa-spinner fa-spin"></i> Loading logs...</div>';

  try {
    const res = await fetch(`/api/posts/history/${CURRENT_USER_ID}`);
    const data = await res.json();
    
    if (data.success && data.logs.length) {
      DOM.historyLogsContainer.innerHTML = '';
      data.logs.forEach(log => {
        const itemCard = document.createElement('div');
        itemCard.className = 'log-item-card';

        const linksHtml = log.results.map(r => `
          <a href="${r.publishedUrl}" target="_blank" class="published-link-chip">
            <i class="fa-solid fa-arrow-up-right-from-square"></i> ${r.accountName} (${r.platform})
          </a>
        `).join('');

        itemCard.innerHTML = `
          <div class="log-item-header">
            <span><i class="fa-regular fa-clock"></i> ${new Date(log.createdAt).toLocaleString()}</span>
            <span class="log-status-badge">SUCCESS</span>
          </div>
          <div style="font-size:13px; font-weight:600;">"${log.content}"</div>
          <div class="log-url-links">${linksHtml}</div>
        `;
        DOM.historyLogsContainer.appendChild(itemCard);
      });
    } else {
      DOM.historyLogsContainer.innerHTML = '<div style="text-align:center; color:var(--text-muted);">No audit logs found.</div>';
    }
  } catch (err) {
    console.error('Audit log fetch error:', err);
  }
}
