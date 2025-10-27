// DOM Variables
const transferFrom = document.getElementById('transfer-from');
const transferTo = document.getElementById('transfer-to');
const menuShowBtn = document.getElementById('menuShowBtn');
const mobileMenuContainer = document.getElementById('menuOnMobile');
const menuBtnArray = Array.from(mobileMenuContainer.children);
const bodyClasses = localStorage.getItem('theme');
const themeBtnChanger = document.getElementById('themeBtnChanger');
const refreshDataBtn = document.getElementById('refresh-data');
const amountInput = document.getElementById('amount');
const currencySelection = document.getElementById('currencySelection');

// Show menu on Mobile
menuShowBtn.addEventListener('click', () => {
  mobileMenuContainer.classList.toggle('hidden');
  changeMenuIcon();
});
function changeMenuIcon() {
  if (mobileMenuContainer.classList.contains('hidden')) {
    menuShowBtn.innerHTML = `<svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-menu h-5 w-5">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>`;
  } else {
    menuShowBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x h-5 w-5"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>`;
  }
}
changeMenuIcon();

// Change Active Class on Mobile Buttons
menuBtnArray.forEach((ele) => {
  ele.addEventListener('click', () => {
    menuBtnArray.forEach((btn) => {
      btn.classList.remove('active');
    });
    ele.classList.add('active');
    mobileMenuContainer.classList.toggle('hidden');
    changeMenuIcon();
  });
});

// Theme Changer Button
document.body.className = bodyClasses;
themeBtnChanger.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', `${document.body.classList}`);
  changeThemeIcon();
});
function changeThemeIcon() {
  if (document.body.classList.contains('dark')) {
    themeBtnChanger.innerHTML = `<svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-sun h-5 w-5">
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </svg>`;
  } else {
    themeBtnChanger.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon h-5 w-5"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>`;
  }
}
changeThemeIcon();

// Update Date and Time
function updateTime() {
  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  const fullDate = `${month}/${day}/${year}`;
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const fullTime = `${String(hours).padStart(2, '0')}:${String(
    minutes
  ).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${
    hours > 12 ? 'PM' : 'AM'
  }`;
  document.getElementById(
    'timeAndDateText'
  ).textContent = `${fullDate}, ${fullTime}`;
  document.getElementById(
    'timeAndDateTextCurrency'
  ).textContent = `${fullDate}, ${fullTime}`;
}
updateTime();
refreshDataBtn.addEventListener('click', () => {
  updateTime();
  getGoldPrice();
});

// Currency With Country Array
const currency_list = [
  { key: 'AED', name: 'UAE Dirham' },
  { key: 'AFN', name: 'Afghan Afghani' },
  { key: 'ALL', name: 'Albanian Lek' },
  { key: 'AMD', name: 'Armenian Dram' },
  { key: 'ANG', name: 'Netherlands Antillian Guilder' },
  { key: 'AOA', name: 'Angolan Kwanza' },
  { key: 'ARS', name: 'Argentine Peso' },
  { key: 'AUD', name: 'Australian Dollar' },
  { key: 'AWG', name: 'Aruban Florin' },
  { key: 'AZN', name: 'Azerbaijani Manat' },
  { key: 'BAM', name: 'Bosnia and Herzegovina Convertible Mark' },
  { key: 'BBD', name: 'Barbados Dollar' },
  { key: 'BDT', name: 'Bangladeshi Taka' },
  { key: 'BGN', name: 'Bulgarian Lev' },
  { key: 'BHD', name: 'Bahraini Dinar' },
  { key: 'BIF', name: 'Burundian Franc' },
  { key: 'BMD', name: 'Bermudian Dollar' },
  { key: 'BND', name: 'Brunei Dollar' },
  { key: 'BOB', name: 'Bolivian Boliviano' },
  { key: 'BRL', name: 'Brazilian Real' },
  { key: 'BSD', name: 'Bahamian Dollar' },
  { key: 'BTN', name: 'Bhutanese Ngultrum' },
  { key: 'BWP', name: 'Botswana Pula' },
  { key: 'BYN', name: 'Belarusian Ruble' },
  { key: 'BZD', name: 'Belize Dollar' },
  { key: 'CAD', name: 'Canadian Dollar' },
  { key: 'CDF', name: 'Congolese Franc' },
  { key: 'CHF', name: 'Swiss Franc' },
  { key: 'CLF', name: 'Chilean Unidad de Fomento' },
  { key: 'CLP', name: 'Chilean Peso' },
  { key: 'CNH', name: 'Offshore Chinese Renminbi' },
  { key: 'CNY', name: 'Chinese Renminbi' },
  { key: 'COP', name: 'Colombian Peso' },
  { key: 'CRC', name: 'Costa Rican Colon' },
  { key: 'CUP', name: 'Cuban Peso' },
  { key: 'CVE', name: 'Cape Verdean Escudo' },
  { key: 'CZK', name: 'Czech Koruna' },
  { key: 'DJF', name: 'Djiboutian Franc' },
  { key: 'DKK', name: 'Danish Krone' },
  { key: 'DOP', name: 'Dominican Peso' },
  { key: 'DZD', name: 'Algerian Dinar' },
  { key: 'EGP', name: 'Egyptian Pound' },
  { key: 'ERN', name: 'Eritrean Nakfa' },
  { key: 'ETB', name: 'Ethiopian Birr' },
  { key: 'EUR', name: 'Euro' },
  { key: 'FJD', name: 'Fiji Dollar' },
  { key: 'FKP', name: 'Falkland Islands Pound' },
  { key: 'FOK', name: 'Faroese Króna' },
  { key: 'GBP', name: 'Pound Sterling' },
  { key: 'GEL', name: 'Georgian Lari' },
  { key: 'GGP', name: 'Guernsey Pound' },
  { key: 'GHS', name: 'Ghanaian Cedi' },
  { key: 'GIP', name: 'Gibraltar Pound' },
  { key: 'GMD', name: 'Gambian Dalasi' },
  { key: 'GNF', name: 'Guinean Franc' },
  { key: 'GTQ', name: 'Guatemalan Quetzal' },
  { key: 'GYD', name: 'Guyanese Dollar' },
  { key: 'HKD', name: 'Hong Kong Dollar' },
  { key: 'HNL', name: 'Honduran Lempira' },
  { key: 'HRK', name: 'Croatian Kuna' },
  { key: 'HTG', name: 'Haitian Gourde' },
  { key: 'HUF', name: 'Hungarian Forint' },
  { key: 'IDR', name: 'Indonesian Rupiah' },
  { key: 'ILS', name: 'Israeli New Shekel' },
  { key: 'IMP', name: 'Manx Pound' },
  { key: 'INR', name: 'Indian Rupee' },
  { key: 'IQD', name: 'Iraqi Dinar' },
  { key: 'IRR', name: 'Iranian Rial' },
  { key: 'ISK', name: 'Icelandic Króna' },
  { key: 'JEP', name: 'Jersey Pound' },
  { key: 'JMD', name: 'Jamaican Dollar' },
  { key: 'JOD', name: 'Jordanian Dinar' },
  { key: 'JPY', name: 'Japanese Yen' },
  { key: 'KES', name: 'Kenyan Shilling' },
  { key: 'KGS', name: 'Kyrgyzstani Som' },
  { key: 'KHR', name: 'Cambodian Riel' },
  { key: 'KID', name: 'Kiribati Dollar' },
  { key: 'KMF', name: 'Comorian Franc' },
  { key: 'KRW', name: 'South Korean Won' },
  { key: 'KWD', name: 'Kuwaiti Dinar' },
  { key: 'KYD', name: 'Cayman Islands Dollar' },
  { key: 'KZT', name: 'Kazakhstani Tenge' },
  { key: 'LAK', name: 'Lao Kip' },
  { key: 'LBP', name: 'Lebanese Pound' },
  { key: 'LKR', name: 'Sri Lanka Rupee' },
  { key: 'LRD', name: 'Liberian Dollar' },
  { key: 'LSL', name: 'Lesotho Loti' },
  { key: 'LYD', name: 'Libyan Dinar' },
  { key: 'MAD', name: 'Moroccan Dirham' },
  { key: 'MDL', name: 'Moldovan Leu' },
  { key: 'MGA', name: 'Malagasy Ariary' },
  { key: 'MKD', name: 'Macedonian Denar' },
  { key: 'MMK', name: 'Burmese Kyat' },
  { key: 'MNT', name: 'Mongolian Tögrög' },
  { key: 'MOP', name: 'Macanese Pataca' },
  { key: 'MRU', name: 'Mauritanian Ouguiya' },
  { key: 'MUR', name: 'Mauritian Rupee' },
  { key: 'MVR', name: 'Maldivian Rufiyaa' },
  { key: 'MWK', name: 'Malawian Kwacha' },
  { key: 'MXN', name: 'Mexican Peso' },
  { key: 'MYR', name: 'Malaysian Ringgit' },
  { key: 'MZN', name: 'Mozambican Metical' },
  { key: 'NAD', name: 'Namibian Dollar' },
  { key: 'NGN', name: 'Nigerian Naira' },
  { key: 'NIO', name: 'Nicaraguan Córdoba' },
  { key: 'NOK', name: 'Norwegian Krone' },
  { key: 'NPR', name: 'Nepalese Rupee' },
  { key: 'NZD', name: 'New Zealand Dollar' },
  { key: 'OMR', name: 'Omani Rial' },
  { key: 'PAB', name: 'Panamanian Balboa' },
  { key: 'PEN', name: 'Peruvian Sol' },
  { key: 'PGK', name: 'Papua New Guinean Kina' },
  { key: 'PHP', name: 'Philippine Peso' },
  { key: 'PKR', name: 'Pakistani Rupee' },
  { key: 'PLN', name: 'Polish Złoty' },
  { key: 'PYG', name: 'Paraguayan Guaraní' },
  { key: 'QAR', name: 'Qatari Riyal' },
  { key: 'RON', name: 'Romanian Leu' },
  { key: 'RSD', name: 'Serbian Dinar' },
  { key: 'RUB', name: 'Russian Ruble' },
  { key: 'RWF', name: 'Rwandan Franc' },
  { key: 'SAR', name: 'Saudi Riyal' },
  { key: 'SBD', name: 'Solomon Islands Dollar' },
  { key: 'SCR', name: 'Seychellois Rupee' },
  { key: 'SDG', name: 'Sudanese Pound' },
  { key: 'SEK', name: 'Swedish Krona' },
  { key: 'SGD', name: 'Singapore Dollar' },
  { key: 'SHP', name: 'Saint Helena Pound' },
  { key: 'SLE', name: 'Sierra Leonean Leone' },
  { key: 'SLL', name: 'Sierra Leonean Leone' },
  { key: 'SOS', name: 'Somali Shilling' },
  { key: 'SRD', name: 'Surinamese Dollar' },
  { key: 'SSP', name: 'South Sudanese Pound' },
  { key: 'STN', name: 'São Tomé and Príncipe Dobra' },
  { key: 'SYP', name: 'Syrian Pound' },
  { key: 'SZL', name: 'Eswatini Lilangeni' },
  { key: 'THB', name: 'Thai Baht' },
  { key: 'TJS', name: 'Tajikistani Somoni' },
  { key: 'TMT', name: 'Turkmenistan Manat' },
  { key: 'TND', name: 'Tunisian Dinar' },
  { key: 'TOP', name: 'Tongan Paʻanga' },
  { key: 'TRY', name: 'Turkish Lira' },
  { key: 'TTD', name: 'Trinidad and Tobago Dollar' },
  { key: 'TVD', name: 'Tuvaluan Dollar' },
  { key: 'TWD', name: 'New Taiwan Dollar' },
  { key: 'TZS', name: 'Tanzanian Shilling' },
  { key: 'UAH', name: 'Ukrainian Hryvnia' },
  { key: 'UGX', name: 'Ugandan Shilling' },
  { key: 'USD', name: 'United States Dollar' },
  { key: 'UYU', name: 'Uruguayan Peso' },
  { key: 'UZS', name: "Uzbekistani So'm" },
  { key: 'VES', name: 'Venezuelan Bolívar Soberano' },
  { key: 'VND', name: 'Vietnamese Đồng' },
  { key: 'VUV', name: 'Vanuatu Vatu' },
  { key: 'WST', name: 'Samoan Tālā' },
  { key: 'XAF', name: 'Central African CFA Franc' },
  { key: 'XCD', name: 'East Caribbean Dollar' },
  { key: 'XCG', name: 'Caribbean Guilder' },
  { key: 'XDR', name: 'Special Drawing Rights' },
  { key: 'XOF', name: 'West African CFA franc' },
  { key: 'XPF', name: 'CFP Franc' },
  { key: 'YER', name: 'Yemeni Rial' },
  { key: 'ZAR', name: 'South African Rand' },
  { key: 'ZMW', name: 'Zambian Kwacha' },
  { key: 'ZWL', name: 'Zimbabwean Dollar' },
];
currency_list.forEach((cur) => {
  transferFrom.innerHTML += `<option value="${cur.key}">${cur.key} - ${cur.name}</option>`;
  transferTo.innerHTML += `<option value="${cur.key}">${cur.key} - ${cur.name}</option>`;
  currencySelection.innerHTML += `<option value="${cur.key}">${cur.key} - ${cur.name}</option>`;
});

// Converse Currencies
async function conversionResult() {
  try {
    const request = await fetch(
      `https://v6.exchangerate-api.com/v6/98be94e6446a6f73a403ea80/pair/${
        transferFrom.value
      }/${transferTo.value}/${Number(amountInput.value)}`
    );
    if (!request.ok) {
      throw new Error(`Response Status: ${request.status}`);
    } else {
      const result = await request.json();
      document.querySelector('.result-container').classList.remove('hidden');
      document.getElementById(
        'resultText'
      ).textContent = `${result.conversion_result} ${transferTo.value}`;

      document.getElementById(
        'detailedResult'
      ).textContent = `1 ${transferFrom.value} = ${result.conversion_rate} ${transferTo.value}`;
    }
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
}
const converCurrency = document.getElementById('converCurrency');
converCurrency.addEventListener('click', conversionResult);

// Exchange From and To
const transferBtn = document.getElementById('transfer-btn');
transferBtn.addEventListener(
  'click',
  () =>
    ([transferFrom.value, transferTo.value] = [
      transferTo.value,
      transferFrom.value,
    ])
);

// Gold Price
const goldCards = document.querySelector('.gold-cards');
async function getGoldPrice() {
  goldCards.innerHTML = '';
  const myHeaders = new Headers();
  myHeaders.append(
    'x-api-key',
    'sk_2028eE78175BB201313Bb59309876AaEF3350febE22FC0f5'
  );
  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };
  try {
    const request = await fetch(
      `https://gold.g.apised.com/v1/latest?metals=XAU&base_currency=${currencySelection.value}&weight_unit=gram`,
      requestOptions
    );
    if (!request.ok) {
      throw new Error(`Response Status: ${request.status}`);
    } else {
      const data = await request.json();

      const html = `<div
              class="gold-card border p-4 hover:-translate-y-2 transition-all rounded-lg relative border-(--accent)/20 bg-(--card)">
              <p class="gold-weight">24K</p>
              <p class="text-sm text-(--muted-foreground)">Pure Gold</p>
              <!-- حركة السهم -->
              <div class="icon absolute right-6 top-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-trending-${
                    data.data.metal_prices.XAU.change_percentage > 0
                      ? 'up'
                      : 'down'
                  } w-5 h-5 ${
        data.data.metal_prices.XAU.change_percentage > 0
          ? 'text-green-500'
          : 'text-red-500'
      }">${
        data.data.metal_prices.XAU.change_percentage > 0
          ? '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>     <polyline points="16 7 22 7 22 13"></polyline>'
          : '<polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline>       <polyline points="16 17 22 17 22 11"></polyline>'
      }
                </svg>
              </div>
              <!-- Per Ounce Container -->
              <div
                class="border p-2.5 rounded-xl my-4 bg-(--accent)/5 border-(--accent)/10">
                <p class="text-xs text-(--muted-foreground) mb-1">Per Ounce</p>
                <p class="font-bold text-xl text-(--accent)">${
                  data.data.base_currency
                } ${(data.data.metal_prices.XAU.price_24k * 31.101).toFixed(
        2
      )}</p>
              </div>
              <!-- Per Gram Container -->
              <div class="p-2.5 bg-(--muted) rounded-lg my-4">
                <p class="text-xs text-(--muted-foreground) mb-1">Per Gram</p>
                <p class="font-bold text-xl">${
                  data.data.base_currency
                } ${data.data.metal_prices.XAU.price_24k.toFixed(2)}</p>
              </div>
            </div>
            <!-- 22K Card -->
            <div
              class="gold-card border p-4 hover:-translate-y-2 transition-all rounded-lg relative border-[(--accent)/20 bg-(--card)">
              <p class="gold-weight">21K</p>
              <p class="text-sm text-(--muted-foreground)">Pure Gold</p>
              <!-- حركة السهم -->
              <div class="icon absolute right-6 top-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-trending-${
                    data.data.metal_prices.XAU.change_percentage > 0
                      ? 'up'
                      : 'down'
                  } w-5 h-5 ${
        data.data.metal_prices.XAU.change_percentage > 0
          ? 'text-green-500'
          : 'text-red-500'
      }">${
        data.data.metal_prices.XAU.change_percentage > 0
          ? '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline> <polyline points="16 7 22 7 22 13"></polyline>'
          : '<polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline>       <polyline points="16 17 22 17 22 11"></polyline>'
      }
                </svg>
              </div>
              <!-- Per Ounce Container -->
              <div
                class="border p-2.5 rounded-xl my-4 bg-(--accent)/5 border-(--accent)/10">
                <p class="text-xs text-(--muted-foreground) mb-1">Per Ounce</p>
                <p class="font-bold text-xl text-(--accent)">${
                  data.data.base_currency
                } ${(data.data.metal_prices.XAU.price_21k * 31.101).toFixed(
        2
      )}</p>
              </div>
              <!-- Per Gram Container -->
              <div class="p-2.5 bg-(--muted) rounded-lg my-4">
                <p class="text-xs text-(--muted-foreground) mb-1">Per Gram</p>
                <p class="font-bold text-xl">${
                  data.data.base_currency
                } ${data.data.metal_prices.XAU.price_21k.toFixed(2)}</p>
              </div>
            </div>
            <!-- 18K Card -->
            <div
              class="gold-card border p-4 hover:-translate-y-2 transition-all rounded-lg relative border-(--accent)/20 bg-(--card)">
              <p class="gold-weight">18K</p>
              <p class="text-sm text-(--muted-foreground)">Pure Gold</p>
              <!-- حركة السهم -->
              <div class="icon absolute right-6 top-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-trending-${
                    data.data.metal_prices.XAU.change_percentage > 0
                      ? 'up'
                      : 'down'
                  } w-5 h-5 ${
        data.data.metal_prices.XAU.change_percentage > 0
          ? 'text-green-500'
          : 'text-red-500'
      }">${
        data.data.metal_prices.XAU.change_percentage > 0
          ? '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline>'
          : '<polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline>       <polyline points="16 17 22 17 22 11"></polyline>'
      }
                </svg>
              </div>
              <!-- Per Ounce Container -->
              <div
                class="border p-2.5 rounded-xl my-4 bg-(--accent)/5 border-(--accent)/10">
                <p class="text-xs text-(--muted-foreground) mb-1">Per Ounce</p>
                <p class="font-bold text-xl text-(--accent)">${
                  data.data.base_currency
                } ${(data.data.metal_prices.XAU.price_18k * 31.101).toFixed(
        2
      )}</p>
              </div>
              <!-- Per Gram Container -->
              <div class="p-2.5 bg-(--muted) rounded-lg my-4">
                <p class="text-xs text-(--muted-foreground) mb-1">Per Gram</p>
                <p class="font-bold text-xl">${
                  data.data.base_currency
                } ${data.data.metal_prices.XAU.price_18k.toFixed(2)}</p>
              </div>
            </div>
          </div>`;

      goldCards.insertAdjacentHTML('afterbegin', html);
    }
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
}
getGoldPrice();
currencySelection.addEventListener('change', getGoldPrice);

/*<p class="text-center ${
                data.data.metal_prices.XAU.change_percentage > 0
                  ? 'text-green-500'
                  : 'text-red-500'
              } font-bold text-sm">
                ${data.data.metal_prices.XAU.change_percentage.toFixed(
                  2
                )}% Today
              </p>*/
