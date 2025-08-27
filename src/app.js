const services = [
  {
    id: 1,
    icon: '/src/assets/emergency.png',
    nameBn: 'জাতীয় জরুরি সেবা',
    nameEn: 'National Emergency',
    contactNumber: '999',
    category: ['সার্বজনীন'],
  },
  {
    id: 2,
    icon: '/src/assets/police.png',
    nameBn: 'পুলিশ',
    nameEn: 'Police',
    contactNumber: '999',
    category: ['পুলিশ'],
  },
  {
    id: 3,
    icon: '/src/assets/fire-service.png',
    nameBn: 'ফায়ার সার্ভিস',
    nameEn: 'Fire Service',
    contactNumber: '999',
    category: ['ফায়ার'],
  },
  {
    id: 4,
    icon: '/src/assets/ambulance.png',
    nameBn: 'অ্যাম্বুলেন্স',
    nameEn: 'Ambulance',
    contactNumber: '1994-999999',
    category: ['স্বাস্থ্য'],
  },
  {
    id: 5,
    icon: '/src/assets/emergency.png',
    nameBn: 'নারী ও শিশু সহায়তা',
    nameEn: 'Women & Child Helpline',
    contactNumber: '109',
    category: ['সহায়তা'],
  },
  {
    id: 6,
    icon: '/src/assets/emergency.png',
    nameBn: 'দুদক',
    nameEn: 'Anti-Corruption',
    contactNumber: '106',
    category: ['সরকারি'],
  },
  {
    id: 7,
    icon: '/src/assets/emergency.png',
    nameBn: 'বিদ্যুৎ বিভ্রাট',
    nameEn: 'Electricity Outage',
    contactNumber: '16216',
    category: ['বিদ্যুৎ'],
  },
  {
    id: 8,
    icon: '/src/assets/emergency.png',
    nameBn: 'ব্র্যাক',
    nameEn: 'Brac',
    contactNumber: '16445',
    category: ['এনজিও'],
  },
  {
    id: 9,
    icon: '/src/assets/emergency.png',
    nameBn: 'বাংলাদেশ রেলওয়ে',
    nameEn: 'Bangladesh Railway',
    contactNumber: '163',
    category: ['পরিবহন'],
  },
];

const svg = {
  heart: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 8.81056L13.6352 6.48845C14.2721 5.58412 15.3179 5 16.5 5C18.433 5 20 6.567 20 8.5C20 11.3788 18.0407 14.1215 15.643 16.3358C14.4877 17.4027 13.3237 18.2603 12.4451 18.8521C12.2861 18.9592 12.1371 19.0571 11.9999 19.1456C11.8627 19.0571 11.7137 18.9592 11.5547 18.8521C10.6761 18.2604 9.51216 17.4028 8.35685 16.3358C5.95926 14.1216 4 11.3788 4 8.5C4 6.567 5.567 5 7.5 5C8.68209 5 9.72794 5.58412 10.3648 6.48845L12 8.81056ZM10.5557 3.92626C9.68172 3.3412 8.63071 3 7.5 3C4.46243 3 2 5.46243 2 8.5C2 16 11.9999 21.4852 11.9999 21.4852C11.9999 21.4852 22 16 22 8.5C22 5.46243 19.5376 3 16.5 3C15.3693 3 14.3183 3.3412 13.4443 3.92626C12.8805 4.3037 12.3903 4.78263 12 5.33692C11.6097 4.78263 11.1195 4.3037 10.5557 3.92626Z"></path></svg>`,
  heartFill: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="#e60000ff"><path d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3Z"></path></svg>`,
  copy: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>`,
  phone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"></path></svg>`,
};

const serviceSection = document.querySelector('[data-service-section]');
serviceSection.innerHTML = services
  .map((service) => {
    const { id, icon, nameBn, nameEn, contactNumber, category } = service;
    return `<div class="each-service-card">
        <div class="service-icon-container">
          <div class="service-icon ${id == 2 ? 'police-icon' : ''}">
            <img src="${icon}" alt="Service icon"/>
          </div>
          <button class="heart-btn" data-service-id="${id}" >
            <span class="heart-svg">
              ${svg.heart}
            </span>
            <span class="heart-svg fill">
              ${svg.heartFill}
            </span>
          </button>
        </div>

        <div class="service-heading-container">
          <h4>${nameBn}</h4>
          <span>${nameEn}</span>
        </div>

        <div class="service-contact-container">
          <span>${contactNumber}</span>
          <div>${category.map((each) => `<span class="each-category">${each}</span>`).join('')}</div>
        </div>

        <div class="service-button-container">
          <button data-copy-btn data-service-id="${id}">
            ${svg.copy}
            <span>Copy</span>
          </button>
          <button data-phone-btn data-service-id="${id}">
            ${svg.phone}
            <span>Call</span>
          </button>
        </div>
      </div>`;
  })
  .join('');

//! coin
let coinCount = 100;
function loadCoin() {
  document.querySelector('[data-coin-container]').textContent = coinCount;
}
loadCoin();

//! heart
let heartedService = [];
function loadHeart() {
  document.querySelector('[data-heart-container]').textContent = heartedService.length;
}

function toggleHeart(btn) {
  const serviceId = btn.dataset.serviceId;
  heartedService = heartedService.includes(serviceId) ? heartedService.filter((id) => id !== serviceId) : [...heartedService, serviceId];
  loadHeart();

  btn.classList.toggle('hearted');
}

//! Call
function callFunc(btn) {
  if (coinCount < 20) {
    alert('❌ আপনার পর্যাপ্ত কয়েন নেই, কল করতে কমপক্ষে ২০ কয়েন লাগবে।');
    return;
  }
  const id = btn.dataset.serviceId;
  const { nameEn, nameBn, contactNumber } = services.find((obj) => obj.id == id);
  coinCount = coinCount - 20;
  alert(`📞 Calling ${nameEn} ${contactNumber}...`);
  loadCoin();
  loadHistory({ nameBn, contactNumber, date: new Date() });
}

//! Copy
let copyCount = 0;
function loadCopied() {
  document.querySelector('[copy-count-container]').textContent = copyCount;
}

loadCopied();

async function copyFunc(btn) {
  const id = btn.dataset.serviceId;
  const { contactNumber } = services.find((obj) => obj.id == id);
  try {
    await window.navigator.clipboard.writeText(contactNumber);
    copyCount += 1;
    alert(`📋 নম্বর কপি হয়েছে: ${contactNumber}`);
    loadCopied();
  } catch (err) {
    console.error(err);
    alert('❌ নম্বর কপি ব্যর্থ হয়েছে। console চেক করুন।');
  }
}

//! History
const historyContainer = document.querySelector('[data-history-container]');

function loadHistory({ nameBn, contactNumber, date }) {
  date = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

  const newHistoryCard = document.createElement('div');
  newHistoryCard.className = 'each-history';

  newHistoryCard.innerHTML = `<div>
    <span>${nameBn}</span>
    <span>${contactNumber}</span>
  </div>
  <span>${date}</span>`;
  historyContainer;

  historyContainer.appendChild(newHistoryCard);
}

function clearHistory() {
  historyContainer.innerHTML = '';
}

//! listener
function listener(e) {
  const logoSection = e.target.closest('.logo-section');
  if (logoSection) {
    document.querySelector('main').scrollIntoView({ behavior: 'smooth', block: 'start' });
    return;
  }

  const historyClearBtn = e.target.closest('[data-history-clear-btn]');
  if (historyClearBtn) {
    clearHistory();
    return;
  }

  const historyContent = e.target.closest('.history-section-content');
  if (historyContent) {
    return;
  }

  const historySection = e.target.closest('.history-section');
  if (historySection) {
    if (historySection.classList.contains('expand')) {
      historySection.classList.remove('expand');
      document.body.style.overflow = 'auto';
    } else {
      historySection.classList.add('expand');
      document.body.style.overflow = 'hidden';
    }
    return;
  }

  const heartBtn = e.target.closest('.heart-btn');
  if (heartBtn) {
    toggleHeart(heartBtn);
    return;
  }

  const callBtn = e.target.closest('[data-phone-btn]');
  if (callBtn) {
    callFunc(callBtn);
    return;
  }

  const copyBtn = e.target.closest('[data-copy-btn]');
  if (copyBtn) {
    copyFunc(copyBtn);
    return;
  }
}

document.addEventListener('click', listener);