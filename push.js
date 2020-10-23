var webPush = require('web-push');

const vapidKeys = {
    "publicKey": "BDg2j7od5V_YVYd0-KVtivZ2olibD5eVMzLcxTCO5_EclGwYxfZIXF2fRCoMaC341NR4qFcZm1Un48EgGi__vkc",
    "privateKey": "4QnONz8lJ-uWMX00NYNB2-goDtHgTrs1UMGqs3i9P04"
};

webPush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)

var pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/c22ZXejzDg8:APA91bFISxApXPnok_LF4zOIB3AAVMlLwb5b7G3kk-6ZydbUMqdBM3Lw4I7hhTN-JnaS4D_eEVX8w3nEM9lTU6ACbhhXdGGZB8DoKI8UqZ_wjguk7Dvy1fj8wfcNHEk9r_HWRvV33QC8",
    "keys": {
        "p256dh": "BOkDCZlDaCQTAyENIKqGr7EJsB1smFYu2IPVCOntsLsRTzBtLvZOr5/JOj/wBsXuVKdqlVN6othAaw2x17QrmfU=",
        "auth": "S0WFkOV6HBFjYpLiJngWdQ=="
    }
};

var payload = 'Selamat! Aplikasi anda sudah dapat menerima push notifikasi!';

var options = {
    gcmAPIKey : '632181983633',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);