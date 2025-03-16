// انتخاب عنصر ویدیو
const video = document.getElementById('video');

// تنظیمات دوربین (بدون صدا)
const constraints = {
    audio: false, // صدا غیرفعال است
    video: {
        width: 700, // عرض ویدیو
        height: 500, // ارتفاع ویدیو
        facingMode: "user" // استفاده از دوربین جلو
    }
};

// دریافت استریم ویدیو از دوربین
navigator.mediaDevices.getUserMedia(constraints)
    .then((stream) => {
        video.srcObject = stream; // اتصال استریم به عنصر ویدیو
    })
    .catch((err) => {
        console.error("خطا در دسترسی به دوربین: ", err);
    });