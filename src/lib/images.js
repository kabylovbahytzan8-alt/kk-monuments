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
    cover:   'https://media.base44.com/images/public/6a0b00097f5888beaa46cec9/fe1d5adb8_generated_d933ea04.png',
    gallery: [
      'https://media.base44.com/images/public/6a0b00097f5888beaa46cec9/fe1d5adb8_generated_d933ea04.png',
      'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=1200&q=80',
      'https://images.unsplash.com/photo-1569429593410-b498b3fb3387?w=1200&q=80',
    ],
  },

  // Ayaz-Kala — desert ruins, mud-brick ancient fortress
  'ayaz-kala': {
    cover:   'https://images.unsplash.com/photo-1569429593410-b498b3fb3387?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1569429593410-b498b3fb3387?w=1200&q=80',
      'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=1200&q=80',
      'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=1200&q=80',
      'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1200&q=80',
    ],
  },

  // Toprak-Kala — large mudbrick ruins on flat desert plain
  'toprak-kala': {
    cover:   'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=1200&q=80',
      'https://images.unsplash.com/photo-1569429593410-b498b3fb3387?w=1200&q=80',
      'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1200&q=80',
    ],
  },

  // Koi Krylgan Kala — circular fortress ruins
  'koi-krylgan-kala': {
    cover:   'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=1200&q=80',
      'https://images.unsplash.com/photo-1569429593410-b498b3fb3387?w=1200&q=80',
    ],
  },

  // Mizdakhan — ancient necropolis with domed mausoleums
  'mizdakhan': {
    cover:   'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=1200&q=80',
      'https://images.unsplash.com/photo-1561414927-6d86591d0c4f?w=1200&q=80',
      'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=1200&q=80',
    ],
  },

  // Gyaur-Kala — early fortress ruins Khorezm
  'gyaur-kala': {
    cover:   'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1200&q=80',
      'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=1200&q=80',
    ],
  },

  // Janbas-Kala — desert fortress without towers
  'janbas-kala': {
    cover:   'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=1200&q=80',
      'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=1200&q=80',
    ],
  },

  // Big Guldursun — large rectangular fortress ruins
  'big-guldursun': {
    cover:   'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=1200&q=80',
      'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1200&q=80',
    ],
  },

  // Small Guldursun — smaller sister fortress
  'small-guldursun': {
    cover:   'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=80',
    ],
  },

  // Kyzyl-Kala — red brick fortress tower
  'kyzyl-kala': {
    cover:   'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80',
      'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=1200&q=80',
    ],
  },

  // Pil-Kala — fortress ruins desert
  'pil-kala': {
    cover:   'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=1200&q=80',
    ],
  },

  // Bazar-Kala — ancient fortress
  'bazar-kala': {
    cover:   'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=1200&q=80',
    ],
  },

  // Angka-Kala — archaeological ruins
  'angka-kala': {
    cover:   'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=1200&q=80',
    ],
  },

  // Kurgashin-Kala — fortress ruins
  'kurgashin-kala': {
    cover:   'https://images.unsplash.com/photo-1569429593410-b498b3fb3387?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1569429593410-b498b3fb3387?w=1200&q=80',
    ],
  },

  // Burly-Kala — desert fortress
  'burly-kala': {
    cover:   'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=1200&q=80',
    ],
  },

  // Aqshakhan-Kala — fortress ruins
  'aqshakhan-kala': {
    cover:   'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=1200&q=80',
    ],
  },

  // Duman-Kala
  'duman-kala': {
    cover:   'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1200&q=80',
    ],
  },

  // Davkesken — medieval ruins
  'davkesken': {
    cover:   'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=1200&q=80',
    ],
  },

  // Qavat-Kala
  'qavat-kala': {
    cover:   'https://images.unsplash.com/photo-1569429593410-b498b3fb3387?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1569429593410-b498b3fb3387?w=1200&q=80',
    ],
  },

  // Kirk-Kyz — fortress ruins
  'kirk-kyz': {
    cover:   'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=1200&q=80',
    ],
  },

  // ── Mausoleums & Shrines ─────────────────────────────────────────────────

  // Sultan Uvays Bobo — mountain top sacred complex
  'sultan-uvays': {
    cover:   'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&q=80',
      'https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=1200&q=80',
      'https://images.unsplash.com/photo-1542621334-a254cf47733d?w=1200&q=80',
    ],
  },

  // Mazlumkhan Sulu — ornate tiled mausoleum
  'mazlumkhan-sulu': {
    cover:   'https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=1200&q=80',
      'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=1200&q=80',
      'https://images.unsplash.com/photo-1548584470-a6ae8fcbea6c?w=1200&q=80',
    ],
  },

  // Shamun Nabi — sacred burial site
  'shamun-nabi': {
    cover:   'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=1200&q=80',
      'https://images.unsplash.com/photo-1548584470-a6ae8fcbea6c?w=1200&q=80',
    ],
  },

  // Khoja Ishan Bobo — domed mausoleum
  'khoja-ishan': {
    cover:   'https://images.unsplash.com/photo-1548584470-a6ae8fcbea6c?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1548584470-a6ae8fcbea6c?w=1200&q=80',
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&q=80',
    ],
  },

  // Keshirmes Baba — shrine
  'keshirmes-baba': {
    cover:   'https://images.unsplash.com/photo-1519955266818-0231b763bec4?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519955266818-0231b763bec4?w=1200&q=80',
    ],
  },

  // Erejep Khalifa — mosque
  'erejep-khalifa': {
    cover:   'https://images.unsplash.com/photo-1542621334-a254cf47733d?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1542621334-a254cf47733d?w=1200&q=80',
    ],
  },

  // Hakim Ata — medieval mausoleum complex
  'hakim-ata': {
    cover:   'https://images.unsplash.com/photo-1561461056-b6a8cf38a2c5?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1561461056-b6a8cf38a2c5?w=1200&q=80',
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&q=80',
    ],
  },

  // Mizdakhan Necropolis — graves ancient cemetery
  'mizdakhan-necropolis': {
    cover:   'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=1200&q=80',
      'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=1200&q=80',
      'https://images.unsplash.com/photo-1561414927-6d86591d0c4f?w=1200&q=80',
    ],
  },

  // Jomart Kassab Hill — sacred hill site
  'jomart-kassab': {
    cover:   'https://images.unsplash.com/photo-1561414927-6d86591d0c4f?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1561414927-6d86591d0c4f?w=1200&q=80',
    ],
  },

  // Qubla Ustyurt — desert sacred shrines
  'qubla-ustyurt': {
    cover:   'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80',
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1200&q=80',
    ],
  },

  // ── Nukus Monuments ──────────────────────────────────────────────────────

  // Ajiniyaz — Karakalpak poet monument / urban statue
  'ajiniyaz-monument': {
    cover:   'https://images.unsplash.com/photo-1549421263-5ec394a5ad4c?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1549421263-5ec394a5ad4c?w=1200&q=80',
    ],
  },

  // Berdakh — Karakalpak national poet monument
  'berdakh-monument': {
    cover:   'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80',
    ],
  },

  // Savitsky monument — near museum
  'savitsky-monument': {
    cover:   'https://images.unsplash.com/photo-1554907984-15263bfd63bd?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1554907984-15263bfd63bd?w=1200&q=80',
    ],
  },

  // WWII memorial
  'wwii-memorial': {
    cover:   'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=1200&q=80',
    ],
  },

  // Afghan war memorial
  'afghan-war-memorial': {
    cover:   'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&q=80',
    ],
  },

  // Independence monument
  'independence-monument': {
    cover:   'https://images.unsplash.com/photo-1549421263-5ec394a5ad4c?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1549421263-5ec394a5ad4c?w=1200&q=80',
    ],
  },

  // Jirau monument — epic singer statue
  'jirau-monument': {
    cover:   'https://images.unsplash.com/photo-1543832923-44667a44c804?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1543832923-44667a44c804?w=1200&q=80',
    ],
  },

  // Alpamys — epic hero statue
  'alpamys-monument': {
    cover:   'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1200&q=80',
    ],
  },

  // Fishermen of Aral Sea monument
  'fishermen-monument': {
    cover:   'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=1200&q=80',
      'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1200&q=80',
    ],
  },

  // Amu Darya monument
  'amudarya-monument': {
    cover:   'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=80',
    ],
  },

  // ── Museums & Culture ────────────────────────────────────────────────────

  // Savitsky Museum — art museum building / gallery interior
  'savitsky-museum': {
    cover:   'https://images.unsplash.com/photo-1554907984-15263bfd63bd?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1554907984-15263bfd63bd?w=1200&q=80',
      'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=1200&q=80',
      'https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=1200&q=80',
      'https://images.unsplash.com/photo-1491156855053-9cdff72c7f85?w=1200&q=80',
    ],
  },

  // Karakalpakstan State Museum
  'state-museum': {
    cover:   'https://images.unsplash.com/photo-1499364615650-ec38552f4f34?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1499364615650-ec38552f4f34?w=1200&q=80',
      'https://images.unsplash.com/photo-1519608425089-7f3bfa6f6bb8?w=1200&q=80',
    ],
  },

  // Berdakh Museum
  'berdakh-museum': {
    cover:   'https://images.unsplash.com/photo-1519608425089-7f3bfa6f6bb8?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519608425089-7f3bfa6f6bb8?w=1200&q=80',
    ],
  },

  // Ethnographic Museum — traditional crafts, artifacts
  'ethnographic-museum': {
    cover:   'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=1200&q=80',
      'https://images.unsplash.com/photo-1491156855053-9cdff72c7f85?w=1200&q=80',
    ],
  },

  // Ellikkala Archaeological Museum
  'ellikkala-museum': {
    cover:   'https://images.unsplash.com/photo-1491156855053-9cdff72c7f85?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1491156855053-9cdff72c7f85?w=1200&q=80',
    ],
  },

  // ── Khorezm fortresses ────────────────────────────────────────────────────

  'kalalygyr': {
    cover:   'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=1200&q=80',
    ],
  },

  'kavat-kala-kh': {
    cover:   'https://images.unsplash.com/photo-1569429593410-b498b3fb3387?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1569429593410-b498b3fb3387?w=1200&q=80',
    ],
  },

  'tok-kala': {
    cover:   'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=1200&q=80',
    ],
  },

  'qumboskan-kala': {
    cover:   'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=1200&q=80',
    ],
  },

  // ── Nature ────────────────────────────────────────────────────────────────

  // Aral Sea — dried seabed, ships in desert
  'aral-sea': {
    cover:   'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1200&q=80',
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=80',
      'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=1200&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
    ],
  },

  // Muynak ship graveyard — rusting ships in desert sand
  'muynak-ships': {
    cover:   'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1200&q=80',
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=80',
      'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=1200&q=80',
    ],
  },

  // Ustyurt Plateau — dramatic cliffs, vast steppe
  'ustyurt-plateau': {
    cover:   'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80',
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1200&q=80',
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=80',
    ],
  },

  // Amu Darya delta — river delta wetlands
  'amudarya-delta': {
    cover:   'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=80',
      'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&q=80',
    ],
  },

  // Sudochye Lake — wetlands, birds, reeds
  'sudochye-lake': {
    cover:   'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
    ],
  },

  // ── Settlements ───────────────────────────────────────────────────────────

  'muynak': {
    cover:   'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=1200&q=80',
      'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1200&q=80',
    ],
  },

  'khodjeyli': {
    cover:   'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&q=80',
    ],
  },

  'turtkul': {
    cover:   'https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&q=80',
    ],
  },

  'beruni': {
    cover:   'https://images.unsplash.com/photo-1543832923-44667a44c804?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1543832923-44667a44c804?w=1200&q=80',
    ],
  },

  'chimbay': {
    cover:   'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=1200&q=80',
    ],
  },

  // ── Modern ────────────────────────────────────────────────────────────────

  'constitution-monument': {
    cover:   'https://images.unsplash.com/photo-1549421263-5ec394a5ad4c?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1549421263-5ec394a5ad4c?w=1200&q=80',
    ],
  },

  'friendship-monument': {
    cover:   'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80',
    ],
  },

  'teachers-monument': {
    cover:   'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&q=80',
    ],
  },

  'aral-ecology-monument': {
    cover:   'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=1200&q=80',
      'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1200&q=80',
    ],
  },

  // ── Other ─────────────────────────────────────────────────────────────────

  'caravan-route': {
    cover:   'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1200&q=80',
      'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=1200&q=80',
    ],
  },

  'zoroastrian-temples': {
    cover:   'https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=1200&q=80',
      'https://images.unsplash.com/photo-1561461056-b6a8cf38a2c5?w=1200&q=80',
    ],
  },

  'ellikkala-walls': {
    cover:   'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=1200&q=80',
    ],
  },
};

// ─── Public API ─────────────────────────────────────────────────────────────

/** Returns the cover image URL for a monument card / hero */
export function getMonumentImage(id) {
  return monumentImages[id]?.cover || images.hero;
}

/** Returns gallery array for a monument detail page (falls back to [cover]) */
export function getMonumentGallery(id) {
  const entry = monumentImages[id];
  if (!entry) return [images.hero];
  return entry.gallery?.length ? entry.gallery : [entry.cover];
}