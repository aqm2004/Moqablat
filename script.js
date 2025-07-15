// البيانات المحدثة
const itemsData = {
    vegetables: [
        { id: 1, name: "خيار", icon: "fa-carrot" },
        { id: 2, name: "بيتنجان", icon: "fa-eggplant" },
        { id: 3, name: "طماطه", icon: "fa-apple-alt" },
        { id: 4, name: "جزر", icon: "fa-carrot" },
        { id: 5, name: "بتيتا", icon: "fa-apple-alt" },
        { id: 6, name: "لهانه", icon: "fa-pepper-hot" },
        { id: 7, name: "تفاح", icon: "fa-apple-alt" },
        { id: 8, name: "رمان", icon: "fa-apple-alt" },
        { id: 9, name: "اناناس", icon: "fa-pineapple" },
        { id: 10, name: "بطيخ", icon: "fa-watermelon" },
        { id: 11, name: "ركي", icon: "fa-leaf" },
        { id: 12, name: "برتقال", icon: "fa-orange" },
        { id: 13, name: "ليمون", icon: "fa-lemon" },
        { id: 14, name: "فلفل", icon: "fa-pepper-hot" },
        { id: 15, name: "فلفل ألوان", icon: "fa-pepper-hot" },
        { id: 16, name: "معدنوس", icon: "fa-leaf" },
        { id: 17, name: "خس", icon: "fa-leaf" },
        { id: 18, name: "شونذر", icon: "fa-carrot" },
        { id: 19, name: "بيتنجان شوي", icon: "fa-eggplant" },
        { id: 20, name: "فراولة", icon: "fa-strawberry" },
        { id: 21, name: "جرجير", icon: "fa-leaf" }
    ],
    spices: [
        { id: 22, name: "مبيض حمص", icon: "fa-mortar-pestle" },
        { id: 23, name: "كمون", icon: "fa-mortar-pestle" },
        { id: 24, name: "نعناع يابس", icon: "fa-leaf" },
        { id: 25, name: "فلفل أسود", icon: "fa-pepper-hot" },
        { id: 26, name: "لامندوزي", icon: "fa-mortar-pestle" },
        { id: 27, name: "بهارات صفرة", icon: "fa-mortar-pestle" },
        { id: 28, name: "أريكانو", icon: "fa-mortar-pestle" },
        { id: 29, name: "عود دارسين", icon: "fa-mortar-pestle" },
        { id: 30, name: "ورق غار", icon: "fa-leaf" },
        { id: 31, name: "كزبرة", icon: "fa-leaf" },
        { id: 32, name: "هيل", icon: "fa-mortar-pestle" },
        { id: 33, name: "برغل ناعم", icon: "fa-mortar-pestle" },
        { id: 34, name: "سماك", icon: "fa-fish" },
        { id: 35, name: "ماجي دجاج", icon: "fa-mortar-pestle" },
        { id: 36, name: "شربت برتقال", icon: "fa-glass-water" }
    ],
    food: [
        { id: 37, name: "كجب", icon: "fa-cheese" },
        { id: 38, name: "مايونيز هلو", icon: "fa-jar" },
        { id: 39, name: "مايونيز أمريكان", icon: "fa-jar" },
        { id: 40, name: "خردل", icon: "fa-jar" },
        { id: 41, name: "عسل", icon: "fa-jar" },
        { id: 42, name: "دبس رمان يمامة", icon: "fa-jar" },
        { id: 43, name: "معكرونة", icon: "fa-pasta" },
        { id: 44, name: "سبكتي", icon: "fa-pasta" },
        { id: 45, name: "صدر دجاج", icon: "fa-drumstick" },
        { id: 46, name: "زيت زيتون تنكة", icon: "fa-oil-can" },
        { id: 47, name: "جبن مراد", icon: "fa-cheese" },
        { id: 48, name: "جبن بارميزان", icon: "fa-cheese" },
        { id: 49, name: "لسان", icon: "fa-cow" },
        { id: 50, name: "زيت", icon: "fa-oil-can" },
        { id: 51, name: "فاصوليا حمراء", icon: "fa-seedling" },
        { id: 52, name: "حمص مجروش", icon: "fa-seedling" },
        { id: 53, name: "حمص كسيح", icon: "fa-seedling" },
        { id: 54, name: "فول مدمس", icon: "fa-seedling" },
        { id: 55, name: "لب جوز", icon: "fa-nut" },
        { id: 56, name: "راشي", icon: "fa-bread-slice" },
        { id: 57, name: "علب صوص", icon: "fa-jar" },
        { id: 58, name: "علب فتوش", icon: "fa-jar" }
    ],
    cleaning: [
        { id: 59, name: "زاهي", icon: "fa-soap" },
        { id: 60, name: "معطر أرضية", icon: "fa-spray-can" },
        { id: 61, name: "ملمع جام", icon: "fa-spray-can" },
        { id: 62, name: "مزيل دهون", icon: "fa-spray-can" },
        { id: 63, name: "سيم", icon: "fa-soap" },
        { id: 64, name: "جفوف", icon: "fa-soap" },
        { id: 65, name: "صدريات", icon: "fa-tshirt" },
        { id: 66, name: "طاقيات", icon: "fa-hat-chef" },
        { id: 67, name: "كلنس", icon: "fa-broom" }
    ],
    production: [
        { id: 68, name: "فتوش", icon: "fa-utensils" },
        { id: 69, name: "الأنوار", icon: "fa-utensils" },
        { id: 70, name: "باربكيو", icon: "fa-utensils" },
        { id: 71, name: "سيزر", icon: "fa-utensils" },
        { id: 72, name: "جرجير", icon: "fa-utensils" },
        { id: 73, name: "تونا", icon: "fa-utensils" },
        { id: 74, name: "فتة حمص", icon: "fa-utensils" },
        { id: 75, name: "فتة باذنجان", icon: "fa-utensils" }
    ]
};

// العناصر المختارة
let selectedItems = [];
let currentItem = null;
let currentCategory = null;

// DOM Elements
const categoryItems = document.querySelectorAll('.category-item');
const itemsContainer = document.querySelector('.items-container');
const orderItemsContainer = document.getElementById('order-items');
const itemsCountElement = document.getElementById('items-count');
const quantityModal = document.getElementById('quantity-modal');
const selectedItemName = document.getElementById('selected-item-name');
const quantityInput = document.getElementById('quantity-input');
const unitSelect = document.getElementById('unit-select');
const confirmBtn = document.getElementById('confirm-btn');
const closeModal = document.querySelector('.close-modal');
const notification = document.getElementById('notification');
const printBtn = document.getElementById('print-btn');
const copyBtn = document.getElementById('copy-btn');
const clearBtn = document.getElementById('clear-btn');
const saveBtn = document.getElementById('save-btn');
const minusBtn = document.querySelector('.quantity-btn.minus');
const plusBtn = document.querySelector('.quantity-btn.plus');
const darkModeToggle = document.getElementById('dark-mode-toggle');

// تحميل الوضع الداكن من التخزين المحلي
function loadDarkModePreference() {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    document.body.classList.toggle('dark-mode', darkMode);
    updateDarkModeIcon(darkMode);
}

// تحديث أيقونة الوضع الداكن
function updateDarkModeIcon(isDarkMode) {
    const icon = darkModeToggle.querySelector('i');
    icon.classList.toggle('fa-moon', !isDarkMode);
    icon.classList.toggle('fa-sun', isDarkMode);
}

// عرض العناصر حسب الفئة
function showItems(category) {
    currentCategory = category;
    itemsContainer.innerHTML = '';
    
    itemsData[category].forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'item-card';
        itemElement.innerHTML = `
            <i class="fas ${item.icon}"></i>
            <h4>${item.name}</h4>
        `;
        
        itemElement.addEventListener('click', () => {
            currentItem = item;
            setupQuantityModal(item, category);
        });
        
        itemsContainer.appendChild(itemElement);
    });
}

// إعداد نافذة الكمية
function setupQuantityModal(item, category) {
    selectedItemName.textContent = item.name;
    quantityInput.value = 1;
    
    if (category === 'production') {
        document.querySelector('.unit-selection').style.display = 'none';
    } else {
        document.querySelector('.unit-selection').style.display = 'block';
        unitSelect.value = getDefaultUnit(item.name, category);
    }
    
    quantityModal.style.display = 'flex';
    
    // إعادة تعيين حدث التأكيد
    confirmBtn.onclick = function() {
        const quantity = parseInt(quantityInput.value);
        const unit = category === 'production' ? '' : unitSelect.value;
        
        if (quantity > 0 && currentItem) {
            addItemToOrder(currentItem, quantity, unit);
            quantityModal.style.display = 'none';
        }
    };
}

// الحصول على الوحدة الافتراضية حسب نوع العنصر والفئة
function getDefaultUnit(itemName, category) {
    if (category === 'production') return '';
    
    if (category === 'cleaning') {
        if (itemName.includes("معطر") || itemName.includes("مزيل")) return "علبة";
        if (itemName.includes("زاهي") || itemName.includes("سيم")) return "لتر";
        return "حبة";
    }
    
    if (category === 'food') {
        if (itemName.includes("مايونيز") || itemName.includes("دبس") || itemName.includes("صوص")) return "علبة";
        if (itemName.includes("زيت")) return "لتر";
        if (itemName.includes("معكرونة") || itemName.includes("سبكتي")) return "كارتون";
        return "حبة";
    }
    
    if (category === 'vegetables') {
        if (itemName.includes("خس") || itemName.includes("جرجير") || itemName.includes("معدنوس")) return "ربطة";
        if (itemName.includes("بطيخ") || itemName.includes("اناناس")) return "حبة";
        return "كغم";
    }
    
    if (category === 'spices') {
        if (itemName.includes("شربت")) return "لتر";
        if (itemName.includes("برغل")) return "كغم";
        return "كغم";
    }
    
    return "حبة";
}

// إضافة عنصر إلى الطلب
function addItemToOrder(item, quantity, unit) {
    const existingItem = selectedItems.find(i => i.id === item.id && i.unit === unit);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        selectedItems.push({
            id: item.id,
            name: item.name,
            quantity: quantity,
            unit: unit
        });
    }
    
    updateOrderList();
    showNotification(`تم إضافة ${quantity} ${unit} من ${item.name}`);
}

// تحديث قائمة الطلبات
function updateOrderList() {
    orderItemsContainer.innerHTML = '';
    
    if (selectedItems.length === 0) {
        orderItemsContainer.innerHTML = '<p style="text-align: center; color: #999;">لا توجد أصناف مختارة</p>';
        itemsCountElement.textContent = '0';
        return;
    }
    
    selectedItems.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.className = 'order-item';
        itemElement.innerHTML = `
            <div class="order-item-info">
                <div class="order-item-name">${item.name}</div>
                <div class="order-item-details">
                    <span>${item.quantity} ${item.unit || ''}</span>
                </div>
            </div>
            <div class="order-item-actions">
                <button class="edit-item" data-index="${index}"><i class="fas fa-edit"></i></button>
                <button class="remove-item" data-index="${index}"><i class="fas fa-times"></i></button>
            </div>
        `;
        
        orderItemsContainer.appendChild(itemElement);
    });
    
    // تحديث عدد الأصناف
    itemsCountElement.textContent = selectedItems.length;
    
    // إضافة أحداث للأزرار الجديدة
    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = e.currentTarget.getAttribute('data-index');
            const removedItem = selectedItems[index];
            selectedItems.splice(index, 1);
            updateOrderList();
            showNotification(`تم إزالة ${removedItem.name}`);
        });
    });
    
    document.querySelectorAll('.edit-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = e.currentTarget.getAttribute('data-index');
            const itemToEdit = selectedItems[index];
            currentItem = { id: itemToEdit.id, name: itemToEdit.name };
            setupQuantityModal(itemToEdit, currentCategory);
            
            // عند التأكيد، استبدل العنصر القديم بالجديد
            confirmBtn.onclick = function() {
                const newQuantity = parseInt(quantityInput.value);
                const newUnit = currentCategory === 'production' ? '' : unitSelect.value;
                
                if (newQuantity > 0) {
                    selectedItems[index] = {
                        id: itemToEdit.id,
                        name: itemToEdit.name,
                        quantity: newQuantity,
                        unit: newUnit
                    };
                    updateOrderList();
                    quantityModal.style.display = 'none';
                    showNotification(`تم تعديل ${itemToEdit.name}`);
                }
            };
        });
    });
}

// عرض الإشعارات
function showNotification(message) {
    notification.textContent = message;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// توليد محتوى الطباعة
function generatePrintContent() {
    let content = `
        <!DOCTYPE html>
        <html lang="ar" dir="rtl">
        <head>
            <meta charset="UTF-8">
            <title>فاتورة الطلب</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                h1 { text-align: center; color: #2c3e50; margin-bottom: 20px; }
                table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
                th, td { padding: 10px; text-align: right; border-bottom: 1px solid #ddd; }
                th { background-color: #f2f2f2; }
                .total { font-weight: bold; font-size: 1.2em; }
                .footer { text-align: center; margin-top: 30px; color: #777; }
            </style>
        </head>
        <body>
            <h1>فاتورة الطلب</h1>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>اسم الصنف</th>
                        <th>الكمية</th>
                        <th>الوحدة</th>
                    </tr>
                </thead>
                <tbody>
    `;
    
    selectedItems.forEach((item, index) => {
        content += `
            <tr>
                <td>${index + 1}</td>
                <td>${item.name}</td>
                <td>${item.quantity}</td>
                <td>${item.unit || '-'}</td>
            </tr>
        `;
    });
    
    // ... (استمرار الكود السابق)

            content += `
                </tbody>
            </table>
            <div class="total">عدد الأصناف: ${selectedItems.length}</div>
            <div class="footer">
                <p>شكراً لكم - ${new Date().toLocaleString()}</p>
            </div>
        </body>
        </html>
    `;
    
    return content;
}

// طباعة الفاتورة
function printOrder() {
    if (selectedItems.length === 0) {
        showNotification("لا توجد أصناف لطباعتها");
        return;
    }
    
    const printWindow = window.open('', '_blank');
    printWindow.document.write(generatePrintContent());
    printWindow.document.close();
    printWindow.focus();
    
    setTimeout(() => {
        printWindow.print();
        printWindow.close();
    }, 500);
}

// نسخ الطلب كنص
function copyOrderToClipboard() {
    if (selectedItems.length === 0) {
        showNotification("لا توجد أصناف لنسخها");
        return;
    }
    
    let text = "الطلبات المختارة:\n";
    text += "----------------\n";
    
    selectedItems.forEach((item, index) => {
        text += `${index + 1}. ${item.name} - ${item.quantity} ${item.unit || ''}\n`;
    });
    
    text += `\nعدد الأصناف: ${selectedItems.length}\n`;
    text += `التاريخ: ${new Date().toLocaleString()}`;
    
    navigator.clipboard.writeText(text).then(() => {
        showNotification("تم نسخ الطلب إلى الحافظة");
    }).catch(err => {
        showNotification("حدث خطأ أثناء النسخ");
        console.error('Failed to copy: ', err);
    });
}

// مسح جميع العناصر
function clearOrder() {
    if (selectedItems.length === 0) {
        showNotification("لا توجد أصناف لمسحها");
        return;
    }
    
    if (confirm("هل أنت متأكد من مسح جميع الأصناف؟")) {
        selectedItems = [];
        updateOrderList();
        showNotification("تم مسح جميع الأصناف");
    }
}

// حفظ الطلب في التخزين المحلي
function saveOrder() {
    if (selectedItems.length === 0) {
        showNotification("لا توجد أصناف لحفظها");
        return;
    }
    
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    const newOrder = {
        id: Date.now(),
        date: new Date().toISOString(),
        items: [...selectedItems]
    };
    
    orders.push(newOrder);
    localStorage.setItem('orders', JSON.stringify(orders));
    
    showNotification("تم حفظ الطلب بنجاح");
}

// تحميل الطلبات المحفوظة (للتطوير المستقبلي)
function loadSavedOrders() {
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    return orders;
}

// تهيئة الأحداث
function initializeEvents() {
    // أحداث الفئات
    categoryItems.forEach(item => {
        item.addEventListener('click', () => {
            categoryItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            showItems(item.dataset.category);
        });
    });
    
    // أحداث نافذة الكمية
    closeModal.addEventListener('click', () => {
        quantityModal.style.display = 'none';
    });
    
    minusBtn.addEventListener('click', () => {
        const currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });
    
    plusBtn.addEventListener('click', () => {
        quantityInput.value = parseInt(quantityInput.value) + 1;
    });
    
    quantityInput.addEventListener('change', () => {
        if (quantityInput.value < 1) quantityInput.value = 1;
    });
    
    // أحداث الأزرار الرئيسية
    printBtn.addEventListener('click', printOrder);
    copyBtn.addEventListener('click', copyOrderToClipboard);
    clearBtn.addEventListener('click', clearOrder);
    saveBtn.addEventListener('click', saveOrder);
    
    // حدث الوضع الداكن
    darkModeToggle.addEventListener('click', () => {
        const isDarkMode = document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
        updateDarkModeIcon(isDarkMode);
    });
    
    // إغلاق النافذة عند النقر خارجها
    window.addEventListener('click', (e) => {
        if (e.target === quantityModal) {
            quantityModal.style.display = 'none';
        }
    });
}

// تهيئة التطبيق
function initializeApp() {
    loadDarkModePreference();
    initializeEvents();
    
    // تحميل الفئة الأولى افتراضياً
    if (categoryItems.length > 0) {
        categoryItems[0].click();
    }
}

// تشغيل التطبيق عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', initializeApp);