// ─── Hero / main site image ────────────────────────────────────────────────
export const images = {
  // Chilpyk — used on main hero and on Chilpyk monument page only
  hero: 'https://media.base44.com/images/public/6a0b00097f5888beaa46cec9/fe1d5adb8_generated_d933ea04.png',
};

// ─── Per-monument image sets ────────────────────────────────────────────────
// Unsplash search queries are matched to monument type:
// - desert ruins / ancient fortresses → arid landscape + ruins
// - mausoleums → Islamic architecture, domes, sacred sites
// - Aral Sea / nature → sea, desert, ships, steppe
// - museums → interior art galleries, buildings
// - Nukus monuments → Soviet-era statues, urban monuments

const monumentImages = {

  // ── Fortresses ──────────────────────────────────────────────────────────

  'chilpyk': {
    cover:   'https://karakalpakstan.travel/data/uploads/00_media/2025/avgust/photo_2025-08-04_17-39-24.jpg',
    gallery: [
      'https://karakalpakstan.travel/data/uploads/00_media/2025/avgust/photo_2025-08-04_17-39-24.jpg',
      'https://ic.pics.livejournal.com/appassionata_lr/13101813/1771506/1771506_800.jpg',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/4a/e7/32/chilpyk-kala.jpg?w=900&h=-1&s=1',
    ],
  },

  // Ayaz-Kala — desert ruins, mud-brick ancient fortress
  'ayaz-kala': {
    cover:   'https://upload.wikimedia.org/wikipedia/commons/3/33/Ayaz-Kala-2.jpg',
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/3/33/Ayaz-Kala-2.jpg',
      'https://uzbekistan.travel/storage/app/media/uploaded-files/ayaz%20kala3.jpg',
      'https://legacy.uz//media/news/0/-r67a1m.jpg',
      'https://www.advantour.com/img/uzbekistan/karakalpakstan/ayaz-kala3.jpg',
    ],
  },

  // Toprak-Kala — large mudbrick ruins on flat desert plain
  'toprak-kala': {
    cover:   'https://www.advantour.com/img/uzbekistan/karakalpakstan/toprak-kala.jpg',
    gallery: [
      'https://www.advantour.com/img/uzbekistan/karakalpakstan/toprak-kala.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Toprak-Kala.jpg/1280px-Toprak-Kala.jpg',
      'https://www.orexca.com/img/uzbekistan/toprak-kala1.jpg',
    ],
  },

  'koi-krylgan-kala': {
    cover:   'https://www.advantour.com/img/uzbekistan/karakalpakstan/koy-krylgan-kala.jpg',
    gallery: [
      'https://www.advantour.com/img/uzbekistan/karakalpakstan/koy-krylgan-kala.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Koy_Krylgan_Kala.jpg/1280px-Koy_Krylgan_Kala.jpg',
    ],
  },

  'mizdakhan': {
    cover:   'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ancient_Complex_Mizdahkan.jpg/1280px-Ancient_Complex_Mizdahkan.jpg',
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ancient_Complex_Mizdahkan.jpg/1280px-Ancient_Complex_Mizdahkan.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Necropolis_Mizdakhan_01.JPG/1280px-Necropolis_Mizdakhan_01.JPG',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Necropolis_Mizdakhan_03.JPG/1280px-Necropolis_Mizdakhan_03.JPG',
    ],
  },

  'gyaur-kala': {
    cover:   'https://www.advantour.com/img/uzbekistan/karakalpakstan/gyaur-kala.jpg',
    gallery: [
      'https://www.advantour.com/img/uzbekistan/karakalpakstan/gyaur-kala.jpg',
    ],
  },

  'janbas-kala': {
    cover:   'https://www.advantour.com/img/uzbekistan/karakalpakstan/janbas-kala.jpg',
    gallery: [
      'https://www.advantour.com/img/uzbekistan/karakalpakstan/janbas-kala.jpg',
    ],
  },

  'big-guldursun': {
    cover:   'https://www.advantour.com/img/uzbekistan/karakalpakstan/guldursun-kala.jpg',
    gallery: [
      'https://www.advantour.com/img/uzbekistan/karakalpakstan/guldursun-kala.jpg',
    ],
  },

  'small-guldursun': {
    cover:   'https://www.advantour.com/img/uzbekistan/karakalpakstan/guldursun-kala.jpg',
    gallery: [
      'https://www.advantour.com/img/uzbekistan/karakalpakstan/guldursun-kala.jpg',
    ],
  },

  'kyzyl-kala': {
    cover:   'https://www.advantour.com/img/uzbekistan/karakalpakstan/kyzyl-kala.jpg',
    gallery: [
      'https://www.advantour.com/img/uzbekistan/karakalpakstan/kyzyl-kala.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Kyzyl-Kala_fortress.jpg/1280px-Kyzyl-Kala_fortress.jpg',
    ],
  },

  'pil-kala': {
    cover:   'https://www.advantour.com/img/uzbekistan/karakalpakstan/ayaz-kala3.jpg',
    gallery: ['https://www.advantour.com/img/uzbekistan/karakalpakstan/ayaz-kala3.jpg'],
  },

  'bazar-kala': {
    cover:   'https://www.orexca.com/img/uzbekistan/ayaz-kala2.jpg',
    gallery: ['https://www.orexca.com/img/uzbekistan/ayaz-kala2.jpg'],
  },

  'angka-kala': {
    cover:   'https://www.advantour.com/img/uzbekistan/karakalpakstan/koy-krylgan-kala.jpg',
    gallery: ['https://www.advantour.com/img/uzbekistan/karakalpakstan/koy-krylgan-kala.jpg'],
  },

  'kurgashin-kala': {
    cover:   'https://www.advantour.com/img/uzbekistan/karakalpakstan/toprak-kala.jpg',
    gallery: ['https://www.advantour.com/img/uzbekistan/karakalpakstan/toprak-kala.jpg'],
  },

  'burly-kala': {
    cover:   'https://www.advantour.com/img/uzbekistan/karakalpakstan/janbas-kala.jpg',
    gallery: ['https://www.advantour.com/img/uzbekistan/karakalpakstan/janbas-kala.jpg'],
  },

  'aqshakhan-kala': {
    cover:   'https://www.orexca.com/img/uzbekistan/toprak-kala1.jpg',
    gallery: ['https://www.orexca.com/img/uzbekistan/toprak-kala1.jpg'],
  },

  'duman-kala': {
    cover:   'https://www.advantour.com/img/uzbekistan/karakalpakstan/gyaur-kala.jpg',
    gallery: ['https://www.advantour.com/img/uzbekistan/karakalpakstan/gyaur-kala.jpg'],
  },

  'davkesken': {
    cover:   'https://www.advantour.com/img/uzbekistan/karakalpakstan/kyzyl-kala.jpg',
    gallery: ['https://www.advantour.com/img/uzbekistan/karakalpakstan/kyzyl-kala.jpg'],
  },

  'qavat-kala': {
    cover:   'https://www.advantour.com/img/uzbekistan/karakalpakstan/ayaz-kala3.jpg',
    gallery: ['https://www.advantour.com/img/uzbekistan/karakalpakstan/ayaz-kala3.jpg'],
  },

  'kirk-kyz': {
    cover:   'https://www.orexca.com/img/uzbekistan/ayaz-kala2.jpg',
    gallery: ['https://www.orexca.com/img/uzbekistan/ayaz-kala2.jpg'],
  },

  'sultan-uvays': {
    cover:   'https://uzbekistan.travel/storage/app/media/uploaded-files/sultan-uvays-bobo.jpg',
    gallery: [
      'https://uzbekistan.travel/storage/app/media/uploaded-files/sultan-uvays-bobo.jpg',
      'https://www.advantour.com/img/uzbekistan/karakalpakstan/sultan-uvays-bobo.jpg',
    ],
  },

  'mazlumkhan-sulu': {
    cover:   'https://uzbekistan.travel/storage/app/media/uploaded-files/mizdahkan2.jpg',
    gallery: [
      'https://uzbekistan.travel/storage/app/media/uploaded-files/mizdahkan2.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Necropolis_Mizdakhan_01.JPG/1280px-Necropolis_Mizdakhan_01.JPG',
    ],
  },

  'shamun-nabi': {
    cover:   'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Necropolis_Mizdakhan_03.JPG/1280px-Necropolis_Mizdakhan_03.JPG',
    gallery: ['https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Necropolis_Mizdakhan_03.JPG/1280px-Necropolis_Mizdakhan_03.JPG'],
  },

  'khoja-ishan': {
    cover:   'https://www.advantour.com/img/uzbekistan/karakalpakstan/sultan-uvays-bobo.jpg',
    gallery: ['https://www.advantour.com/img/uzbekistan/karakalpakstan/sultan-uvays-bobo.jpg'],
  },

  'keshirmes-baba': {
    cover:   'https://uzbekistan.travel/storage/app/media/uploaded-files/sultan-uvays-bobo.jpg',
    gallery: ['https://uzbekistan.travel/storage/app/media/uploaded-files/sultan-uvays-bobo.jpg'],
  },

  'erejep-khalifa': {
    cover:   'https://uzbekistan.travel/storage/app/media/uploaded-files/mizdahkan2.jpg',
    gallery: ['https://uzbekistan.travel/storage/app/media/uploaded-files/mizdahkan2.jpg'],
  },

  'hakim-ata': {
    cover:   'https://www.advantour.com/img/uzbekistan/karakalpakstan/sultan-uvays-bobo.jpg',
    gallery: ['https://www.advantour.com/img/uzbekistan/karakalpakstan/sultan-uvays-bobo.jpg'],
  },

  'mizdakhan-necropolis': {
    cover:   'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ancient_Complex_Mizdahkan.jpg/1280px-Ancient_Complex_Mizdahkan.jpg',
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ancient_Complex_Mizdahkan.jpg/1280px-Ancient_Complex_Mizdahkan.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Necropolis_Mizdakhan_01.JPG/1280px-Necropolis_Mizdakhan_01.JPG',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Necropolis_Mizdakhan_03.JPG/1280px-Necropolis_Mizdakhan_03.JPG',
    ],
  },

  'jomart-kassab': {
    cover:   'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Necropolis_Mizdakhan_01.JPG/1280px-Necropolis_Mizdakhan_01.JPG',
    gallery: ['https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Necropolis_Mizdakhan_01.JPG/1280px-Necropolis_Mizdakhan_01.JPG'],
  },

  'qubla-ustyurt': {
    cover:   'https://uzbekistan.travel/storage/app/media/uploaded-files/ustyurt-plateau.jpg',
    gallery: ['https://uzbekistan.travel/storage/app/media/uploaded-files/ustyurt-plateau.jpg'],
  },

  'savitsky-museum': {
    cover:   'https://uzbekistan.travel/storage/app/media/uploaded-files/savitsky-museum-nukus.jpg',
    gallery: [
      'https://uzbekistan.travel/storage/app/media/uploaded-files/savitsky-museum-nukus.jpg',
      'https://www.advantour.com/img/uzbekistan/nukus/savitsky-museum.jpg',
    ],
  },

  'state-museum': {
    cover:   'https://www.advantour.com/img/uzbekistan/nukus/nukus-museum.jpg',
    gallery: ['https://www.advantour.com/img/uzbekistan/nukus/nukus-museum.jpg'],
  },

  'berdakh-museum': {
    cover:   'https://www.advantour.com/img/uzbekistan/nukus/nukus-museum.jpg',
    gallery: ['https://www.advantour.com/img/uzbekistan/nukus/nukus-museum.jpg'],
  },

  'ethnographic-museum': {
    cover:   'https://uzbekistan.travel/storage/app/media/uploaded-files/savitsky-museum-nukus.jpg',
    gallery: ['https://uzbekistan.travel/storage/app/media/uploaded-files/savitsky-museum-nukus.jpg'],
  },

  'ellikkala-museum': {
    cover:   'https://www.advantour.com/img/uzbekistan/karakalpakstan/toprak-kala.jpg',
    gallery: ['https://www.advantour.com/img/uzbekistan/karakalpakstan/toprak-kala.jpg'],
  },

  'aral-sea': {
    cover:   'https://uzbekistan.travel/storage/app/media/uploaded-files/aral-sea.jpg',
    gallery: [
      'https://uzbekistan.travel/storage/app/media/uploaded-files/aral-sea.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Aral_Sea_1989-2014.jpg/1280px-Aral_Sea_1989-2014.jpg',
    ],
  },

  'muynak-ships': {
    cover:   'https://uzbekistan.travel/storage/app/media/uploaded-files/muynak-ship-cemetery.jpg',
    gallery: [
      'https://uzbekistan.travel/storage/app/media/uploaded-files/muynak-ship-cemetery.jpg',
      'https://www.advantour.com/img/uzbekistan/karakalpakstan/muynak-ships.jpg',
    ],
  },

  'ustyurt-plateau': {
    cover:   'https://uzbekistan.travel/storage/app/media/uploaded-files/ustyurt-plateau.jpg',
    gallery: [
      'https://uzbekistan.travel/storage/app/media/uploaded-files/ustyurt-plateau.jpg',
      'https://www.advantour.com/img/uzbekistan/karakalpakstan/ustyurt.jpg',
    ],
  },

  'amudarya-delta': {
    cover:   'https://uzbekistan.travel/storage/app/media/uploaded-files/amudarya.jpg',
    gallery: ['https://uzbekistan.travel/storage/app/media/uploaded-files/amudarya.jpg'],
  },

  'sudochye-lake': {
    cover:   'https://uzbekistan.travel/storage/app/media/uploaded-files/sudochye-lake.jpg',
    gallery: ['https://uzbekistan.travel/storage/app/media/uploaded-files/sudochye-lake.jpg'],
  },

  'muynak': {
    cover:   'https://uzbekistan.travel/storage/app/media/uploaded-files/muynak-ship-cemetery.jpg',
    gallery: ['https://uzbekistan.travel/storage/app/media/uploaded-files/muynak-ship-cemetery.jpg'],
  },

  'khodjeyli': {
    cover:   'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ancient_Complex_Mizdahkan.jpg/1280px-Ancient_Complex_Mizdahkan.jpg',
    gallery: ['https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ancient_Complex_Mizdahkan.jpg/1280px-Ancient_Complex_Mizdahkan.jpg'],
  },

  'turtkul': {
    cover:   'https://www.advantour.com/img/uzbekistan/karakalpakstan/toprak-kala.jpg',
    gallery: ['https://www.advantour.com/img/uzbekistan/karakalpakstan/toprak-kala.jpg'],
  },

  'beruni': {
    cover:   'https://www.orexca.com/img/uzbekistan/toprak-kala1.jpg',
    gallery: ['https://www.orexca.com/img/uzbekistan/toprak-kala1.jpg'],
  },

  'chimbay': {
    cover:   'https://uzbekistan.travel/storage/app/media/uploaded-files/amudarya.jpg',
    gallery: ['https://uzbekistan.travel/storage/app/media/uploaded-files/amudarya.jpg'],
  },
};

export function getMonumentImage(id) {
  return monumentImages[id]?.cover || images.hero;
}

export function getMonumentGallery(id) {
  const entry = monumentImages[id];
  if (!entry) return [images.hero];
  return entry.gallery?.length ? entry.gallery : [entry.cover];
}
