# 🎬 KNX Player - Web Oynatıcısı

KNX Player, gücünü popüler ve açık kaynaklı **[Plyr](https://plyr.io/)** altyapısından alan, modern, hafif ve özelleştirilebilir bir medya oynatıcısıdır. Karmaşık ve sistemi yavaşlatan şifreleme katmanlarından arındırılmış, doğrudan yüksek performansa ve temiz bir koda odaklanan yapısıyla öne çıkar. Ağır güvenlik algoritmaları yerine, sağ tık ve öğeyi inceleme (inspect) gibi kısıtlamalarla donanıma yük bindirmeyen temel bir içerik koruması sağlar.

## ✨ Özellikler

* **Plyr Çekirdeği:** HTML5, YouTube ve Vimeo destekli, sektör standartlarında sağlam ve güvenilir altyapı.
* **Yüksek Performans:** Sistemi yavaşlatan ekstra şifreleme yöntemleri olmadan maksimum hızda video yükleme ve oynatma.
* **Hafif Koruma:** Sağ tık ve "Öğeyi İncele" kısıtlamaları ile performansı etkilemeyen temel içerik güvenliği.
* **Duyarlı (Responsive):** Masaüstü, tablet ve mobil cihaz ekranlarına kusursuz uyum sağlayan akıcı tasarım.
* **Özelleştirilebilir:** İhtiyaçlara göre kolayca şekillendirilebilen CSS ve JS yapısı.

## 🚀 Kurulum

KNX Player'ı projenize dahil etmek oldukça basittir. Plyr dosyalarını ve KNX Player'a ait özelleştirmeleri sayfanıza eklemeniz yeterlidir:

---

## 💻 Çekirdek Kod Mimarisi ve Entegrasyonlar

Aşağıda CodEX Player'ın yeteneklerini gösteren temel kod mimarisinden örnekler bulunmaktadır.

### 1. HTML5 İskeleti ve HLS Entegrasyonu (`index.html`)
HLS kütüphanesi CDN üzerinden projeye dahil edilmiş ve PiP gibi yeni butonlar arayüze eklenmiştir.

```html
<link rel="stylesheet" href="[https://cdn.plyr.io/3.7.8/plyr.css](https://cdn.plyr.io/3.7.8/plyr.css)" />
<link rel="stylesheet" href="css/knx-player.css" />

document.addEventListener('DOMContentLoaded', () => {
    // Plyr altyapısı ile KNX Player'ı başlatma
    const player = new Plyr('#knx-player', {
        controls: [
            'play-large', 'play', 'progress', 'current-time', 
            'mute', 'volume', 'fullscreen'
        ],
        tooltips: { controls: true, seek: true }
    });
    
    // Player hazır olduğunda
    player.on('ready', (event) => {
        console.log('KNX Player kullanıma hazır!');
    });
});
```
---
<div align="center">
  
  # 🎬 KNX Player
  **Web Video Oynatıcı Vitrini**

  [![Canlı Önizleme](https://img.shields.io/badge/🔴_Canlı_Önizleme_İçin_Tıklayın-00a8ff?style=for-the-badge&logo=googlechrome&logoColor=white)]((https://knx-player.blogspot.com/?mod=panel)

  [![Lisans: MIT](https://img.shields.io/badge/Lisans-MIT-yellow.svg?style=flat-square)](#)
  [![Vanilla JS](https://img.shields.io/badge/Çekirdek-Vanilla_JS-f7df1e.svg?style=flat-square&logo=javascript&logoColor=black)](#)
  [![HLS Desteği](https://img.shields.io/badge/Yayın-HLS_(m3u8)-ff69b4.svg?style=flat-square)](#)

  *CodEX Town tarafından tasarlanan, modern "Glassmorphism" arayüzüne sahip, hafif ve yüksek performanslı web oynatıcısı.*

</div>
