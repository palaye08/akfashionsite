import { Injectable, signal } from '@angular/core';

export interface Product {
  id: number;
  slug: string;
  name: string;
  category: 'ongles' | 'extensions' | 'habits' | 'cosmetiques' | 'soins';
  categoryLabel: string;
  description: string;
  shortDesc: string;
  price?: string;
  image: string;
  images?: string[];
  badge?: string;
  isService: boolean;
}

@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly catalogue: Product[] = [
    // ── ONGLES ──
    {
      id: 1,
      slug: 'ongle-gel-permanent',
      name: 'Ongle Gel Permanent',
      category: 'ongles',
      categoryLabel: 'Ongles',
      description: 'Un régime d\'ongles en gel permanent longue durée, résistant et brillant. Pose soignée avec finition impeccable. Durée jusqu\'à 3-4 semaines sans écaillage.',
      shortDesc: 'Pose gel régime longue durée 😍',
      price: 'Sur devis',
      image: 'assets/ongle1.png',
      images: ['assets/ongle1.png', 'assets/ongle2.png', 'assets/ongle3.png'],
      badge: '😍 Tendance',
      isService: true,
    },
    {
      id: 2,
      slug: 'nail-art-premium',
      name: 'Nail Art Premium',
      category: 'ongles',
      categoryLabel: 'Ongles',
      description: 'Création artistique unique sur vos ongles. Motifs personnalisés, dégradés, paillettes et décorations selon votre envie. Un résultat digne des plus grandes marques.',
      shortDesc: 'Nail art sur mesure & créations artistiques',
      price: 'Sur devis',
      image: 'assets/ongle2.png',
      images: ['assets/ongle2.png', 'assets/ongle5.png', 'assets/ongle6.png'],
      isService: true,
    },
    {
      id: 3,
      slug: 'manucure-pedicure',
      name: 'Manucure & Pédicure',
      category: 'ongles',
      categoryLabel: 'Ongles',
      description: 'Soin complet des mains et des pieds : nettoyage, lime, cuticules, hydratation et vernis de votre choix. Vos mains méritent le meilleur.',
      shortDesc: 'Soin complet mains & pieds avec vernis',
      price: 'Sur devis',
      image: 'assets/ongle3.png',
      images: ['assets/ongle3.png', 'assets/onglet4.png', 'assets/ongle5.png'],
      isService: true,
    },
    {
      id: 4,
      slug: 'pose-ongles-capsules',
      name: 'Pose Ongles Capsules',
      category: 'ongles',
      categoryLabel: 'Ongles',
      description: 'Pose de capsules en acrylique ou gel pour des ongles longs et résistants. Choix de formes : amande, coffin, stiletto, carré.',
      shortDesc: 'Capsules acrylique ou gel toutes formes',
      price: 'Sur devis',
      image: 'assets/ongle5.png',
      images: ['assets/ongle5.png', 'assets/ongle6.png', 'assets/onglet4.png'],
      isService: true,
    },
    {
      id: 5,
      slug: 'ongle-paillette',
      name: 'Ongles Paillettes & Glitter',
      category: 'ongles',
      categoryLabel: 'Ongles',
      description: 'Ongles avec paillettes, glitter et effets miroir pour briller à toutes occasions. Parfait pour les fêtes, mariages et soirées.',
      shortDesc: 'Ongles brillants pour toutes occasions',
      price: 'Sur devis',
      image: 'assets/ongle6.png',
      images: ['assets/ongle6.png', 'assets/onglet4.png', 'assets/ongle1.png'],
      badge: '✨ Glamour',
      isService: true,
    },

    // ── EXTENSIONS DE CILS ──
    {
      id: 6,
      slug: 'extension-cils-volume',
      name: 'Extension Cils Volume Russe',
      category: 'extensions',
      categoryLabel: 'Extension Cils',
      description: 'Extension de cils volume russe pour un regard intense et dramatique. Technique professionnelle avec des cils en soie de haute qualité, hypoallergéniques.',
      shortDesc: 'Regard intense & dramatique 🖤',
      price: 'Sur devis',
      image: 'assets/extention1.png',
      images: ['assets/extention1.png', 'assets/extention2.png', 'assets/extension3.png'],
      badge: '🔥 Best-seller',
      isService: true,
    },
    {
      id: 7,
      slug: 'extension-cils-naturel',
      name: 'Extension Cils Effet Naturel',
      category: 'extensions',
      categoryLabel: 'Extension Cils',
      description: 'Extensions de cils pour un rendu naturel et léger. Idéal pour les débutantes ou celles qui préfèrent un maquillage no-makeup makeup.',
      shortDesc: 'Look naturel & léger au quotidien',
      price: 'Sur devis',
      image: 'assets/extention2.png',
      images: ['assets/extention2.png', 'assets/extension3.png', 'assets/extension4.png'],
      isService: true,
    },
    {
      id: 8,
      slug: 'extension-cils-3d',
      name: 'Extension Cils 3D Mega Volume',
      category: 'extensions',
      categoryLabel: 'Extension Cils',
      description: 'Cils 3D mega volume pour un regard spectaculaire. La technique la plus complète pour des cils épais, longs et feuilletés. Durée : 3-4 semaines.',
      shortDesc: 'Cils spectaculaires mega volume 3D',
      price: 'Sur devis',
      image: 'assets/extension3.png',
      images: ['assets/extension3.png', 'assets/extension4.png', 'assets/extension5.png'],
      badge: '💎 Premium',
      isService: true,
    },
    {
      id: 9,
      slug: 'extension-cils-classic',
      name: 'Extension Cils Classique',
      category: 'extensions',
      categoryLabel: 'Extension Cils',
      description: 'Extension classique, un cil artificiel sur un cil naturel. Rendu soigné et élégant. Parfait pour les occasions spéciales et le quotidien.',
      shortDesc: 'Extension classique élégante & durable',
      price: 'Sur devis',
      image: 'assets/extension4.png',
      images: ['assets/extension4.png', 'assets/extension5.png', 'assets/extention1.png'],
      isService: true,
    },
    {
      id: 10,
      slug: 'extension-cils-couleur',
      name: 'Extension Cils Colorés',
      category: 'extensions',
      categoryLabel: 'Extension Cils',
      description: 'Cils d\'extension en couleur pour oser la différence. Disponibles en bordeaux, doré, marron chocolat ou mélangés avec du noir.',
      shortDesc: 'Cils colorés pour oser la différence',
      price: 'Sur devis',
      image: 'assets/extension5.png',
      images: ['assets/extension5.png', 'assets/extention1.png', 'assets/extention2.png'],
      badge: '🎨 Tendance',
      isService: true,
    },

    // ── HABITS / VÊTEMENTS ──
    {
      id: 11,
      slug: 'robe-unisexe-elegante',
      name: 'Tenues Unisexe Élégantes',
      category: 'habits',
      categoryLabel: 'Vêtements',
      description: 'Collection de tenues unisexe élégantes, toutes tailles disponibles. Tissu de qualité, coupe moderne. Parfait pour toutes les occasions.',
      shortDesc: 'Toutes les tailles disponibles ✨',
      price: 'Sur devis',
      image: 'assets/habit1.png',
      images: ['assets/habit1.png', 'assets/habit2.png', 'assets/habit3.png'],
      badge: '🆕 Nouvelle collection',
      isService: false,
    },
    {
      id: 12,
      slug: 'ensemble-casual-chic',
      name: 'Ensemble Casual Chic',
      category: 'habits',
      categoryLabel: 'Vêtements',
      description: 'Ensemble casual chic pour femme, look moderne et confortable. Disponible en plusieurs coloris. Matière douce et respirante.',
      shortDesc: 'Look moderne & confortable',
      price: 'Sur devis',
      image: 'assets/habit2.png',
      images: ['assets/habit2.png', 'assets/habit3.png', 'assets/habit4.png'],
      isService: false,
    },
    {
      id: 13,
      slug: 'tenue-ceremonie',
      name: 'Tenue de Cérémonie',
      category: 'habits',
      categoryLabel: 'Vêtements',
      description: 'Tenue de cérémonie pour les grandes occasions. Mariage, baptême, anniversaire — soyez resplendissante à chaque événement.',
      shortDesc: 'Sublime pour vos grandes occasions',
      price: 'Sur devis',
      image: 'assets/habit3.png',
      images: ['assets/habit3.png', 'assets/habit4.png', 'assets/habit5.png'],
      badge: '💍 Cérémonie',
      isService: false,
    },
    {
      id: 14,
      slug: 'look-streetwear',
      name: 'Look Streetwear Unisexe',
      category: 'habits',
      categoryLabel: 'Vêtements',
      description: 'Look streetwear tendance, unisexe, pour tous les styles. Hoodies, joggers, vestes — le confort rencontre le style.',
      shortDesc: 'Style streetwear pour tous',
      price: 'Sur devis',
      image: 'assets/habit4.png',
      images: ['assets/habit4.png', 'assets/habit5.png', 'assets/habit6.png'],
      isService: false,
    },
    {
      id: 15,
      slug: 'tenue-safari-boubou',
      name: 'Tenues Traditionnelles & Modernes',
      category: 'habits',
      categoryLabel: 'Vêtements',
      description: 'Mélange savant de tradition et modernité. Boubous revisités, bazins, tissus wax façonnés à votre goût pour allier élégance et culture.',
      shortDesc: 'Tradition & modernité fusionnées',
      price: 'Sur devis',
      image: 'assets/habit5.png',
      images: ['assets/habit5.png', 'assets/habit6.png', 'assets/habit1.png'],
      badge: '🌍 Afro-chic',
      isService: false,
    },
    {
      id: 16,
      slug: 'ensemble-sport-chic',
      name: 'Ensemble Sport & Style',
      category: 'habits',
      categoryLabel: 'Vêtements',
      description: 'Collection sport-chic pour rester active tout en étant stylée. Matières techniques, coupe flatteuse, couleurs tendance.',
      shortDesc: 'Active & stylée en même temps',
      price: 'Sur devis',
      image: 'assets/habit6.png',
      images: ['assets/habit6.png', 'assets/habit1.png', 'assets/habit2.png'],
      isService: false,
    },
  ];

  getAll(): Product[] {
    return this.catalogue;
  }

  getByCategory(cat: string): Product[] {
    return this.catalogue.filter(p => p.category === cat);
  }

  getById(id: number): Product | undefined {
    return this.catalogue.find(p => p.id === id);
  }

  getBySlug(slug: string): Product | undefined {
    return this.catalogue.find(p => p.slug === slug);
  }

  getSimilar(product: Product, limit = 4): Product[] {
    return this.catalogue
      .filter(p => p.category === product.category && p.id !== product.id)
      .slice(0, limit);
  }

  getServices(): Product[] {
    return this.catalogue.filter(p => p.isService);
  }

  getProducts(): Product[] {
    return this.catalogue.filter(p => !p.isService);
  }

  getFeatured(): Product[] {
    return this.catalogue.filter(p => !!p.badge).slice(0, 6);
  }
}
