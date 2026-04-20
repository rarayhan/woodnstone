export type Language = 'en' | 'zh';

export const uiTranslations = {
  en: {
    nav: {
      world: 'World',
      idea: 'Idea',
      structure: 'Structure',
      life: 'Life',
      power: 'Power',
      cities: 'Cities',
      connection: 'Connection',
      philosophy: 'Philosophy',
      experience: 'Experience',
      digitalMuseum: 'DIGITAL MUSEUM',
      return: 'Return to Museum Main Hall'
    },
    hero: {
      exhibition: 'Exhibition: Architecture of the East',
      enter: 'Enter the',
      world: 'World',
      quote: '“A System of Harmony, Structure, and Order”',
      begin: 'Begin the Journey'
    },
    headings: {
      historicalContext: 'Historical Context',
      archivalPerspective: 'The Archival Perspective',
      visualEvidence: 'Visual Evidence',
      relatedExhibits: 'Related Exhibits',
      archivalMetadata: 'Archival Metadata',
      ready: 'Ready to continue your journey?',
      return: 'Return to Museum Main Hall',
      deepDive: 'Deep Dive Archive',
      close: 'Close Archive',
      archetypalStudy: 'Archetypal Study',
      spatialExpansion: 'Spatial Expansion',
      comparativeVariant: 'Comparative Variant',
      interactiveDiagram: 'Interactive Diagram',
      modularLogic: 'Modular Logic',
      historicalBlueprint: 'Historical Blueprint',
      scientificRestoration: 'Scientific Restoration',
      hoverToExplore: 'Hover over the structure to explore'
    },
    common: {
      clickToEnter: 'Click to Enter Archive',
      explorePhilosophy: 'Explore Detailed Philosophy',
      diveEngineering: 'Dive into Engineering',
      examineSocialLogic: 'Examine Domestic Social Logic',
      discoverImperialGeometry: 'Discover Imperial Geometry',
      openCityArchive: 'Open City Archive',
      watchStructuralPassages: 'Watch Structural Passages',
      comparativeStudyArchive: 'Comparative Study Archive',
      backToTop: 'Back to Archive Top',
      privacy: 'Privacy',
      terms: 'Terms',
      museumArchive: 'Museum Archive',
      copyright: '© 2024 Digital Exhibition'
    },
    diagrams: {
      timber: {
        title: 'Timber Structure',
        parts: {
          column: { label: 'Column (Zhu)', desc: 'The vertical load-bearing member that transfers weight to the stone base.' },
          beam: { label: 'Beam (Liang)', desc: 'Horizontal members that span the space between columns.' },
          dougong: { label: 'Dougong', desc: 'The interlocking bracket system that connects columns to the roof.' },
          purline: { label: 'Purline (Lin)', desc: 'Secondary horizontal beams supporting the roof rafters.' }
        }
      },
      bay: {
        title: 'The Bay System (Jian)',
        bays: 'Bays'
      },
      courtyard: {
        title: 'Siheyuan Masterplan'
      },
      city: {
        imperialCenter: 'IMPERIAL CENTER',
        ward: 'WARD'
      },
      bridge: {
        label: 'Self-Supporting Arch Structure'
      },
      comparison: {
        title: 'East vs. West',
        chinese: 'Chinese Approach',
        western: 'Western Approach',
        rows: [
          ["Timber Structure", "Stone / Masonry"],
          ["Flexible Joins (Dougong)", "Rigid Arches / Vaults"],
          ["Horizontal Continuity", "Vertical Monumentality"],
          ["Integration with Nature", "Domination of Nature"],
          ["Modular (Jian) Logic", "Proportional Geometry"]
        ]
      }
    }
  },
  zh: {
    nav: {
      world: '世界',
      idea: '理念',
      structure: '结构',
      life: '生活',
      power: '权力',
      cities: '城市',
      connection: '连接',
      philosophy: '哲学',
      experience: '体验',
      digitalMuseum: '数字化博物馆',
      return: '返回博物馆大厅'
    },
    hero: {
      exhibition: '展览：东方建筑',
      enter: '进入',
      world: '世界',
      quote: '“和谐、结构与秩序的体系”',
      begin: '开启旅程'
    },
    headings: {
      historicalContext: '历史背景',
      archivalPerspective: '档案视角',
      visualEvidence: '视觉证据',
      relatedExhibits: '相关展览',
      archivalMetadata: '档案元数据',
      ready: '准备好继续您的旅程了吗？',
      return: '返回博物馆大厅',
      deepDive: '深度档案',
      close: '关闭档案',
      archetypalStudy: '原型研究',
      spatialExpansion: '空间扩张',
      comparativeVariant: '比较变体',
      interactiveDiagram: '互动示意图',
      modularLogic: '模块化逻辑',
      historicalBlueprint: '历史蓝图',
      scientificRestoration: '科学修复',
      hoverToExplore: '悬停在结构上进行探索'
    },
    common: {
      clickToEnter: '点击进入档案',
      explorePhilosophy: '探索详细哲学',
      diveEngineering: '深入工程细节',
      examineSocialLogic: '考察居家社会逻辑',
      discoverImperialGeometry: '发现皇权几何',
      openCityArchive: '开启城市档案',
      watchStructuralPassages: '观察结构通道',
      comparativeStudyArchive: '比较研究档案',
      backToTop: '返回顶部',
      privacy: '隐私政策',
      terms: '使用条款',
      museumArchive: '博物馆档案',
      copyright: '© 2024 数字展览'
    },
    diagrams: {
      timber: {
        title: '木结构',
        parts: {
          column: { label: '柱 (Zhu)', desc: '将重量转移到石基上的垂直承重构件。' },
          beam: { label: '梁 (Liang)', desc: '跨越柱间空间的水平构件。' },
          dougong: { label: '斗拱', desc: '连接柱子与屋顶的连锁支架系统。' },
          purline: { label: '檩 (Lin)', desc: '支撑屋顶椽子的次级水平梁。' }
        }
      },
      bay: {
        title: '开间系统 (Jian)',
        bays: '间'
      },
      courtyard: {
        title: '四合院总平面图'
      },
      city: {
        imperialCenter: '皇权中心',
        ward: '里坊'
      },
      bridge: {
        label: '自承重拱结构'
      },
      comparison: {
        title: '东方 vs. 西方',
        chinese: '中国方式',
        western: '西方方式',
        rows: [
          ["木结构", "石材 / 砖石"],
          ["灵活连接 (斗拱)", "刚性拱门 / 拱顶"],
          ["水平连续性", "垂直纪念性"],
          ["与自然融合", "支配自然"],
          ["模块化 (间) 逻辑", "比例几何"]
        ]
      }
    }
  }
};

export const detailDataTranslations = {
  en: {
    idea: {
      title: "The Idea",
      quote: "Harmony between Heaven and Man.",
      longDesc: "The architectural philosophy of ancient China was never just about shelter. It was the physical manifestation of a metaphysical worldview. Every angle, every timber, and every color was dictated by a system that sought to align human life with the celestial order. \n\nAt its core was the concept of 'Tian Ren He Yi'—the unity of Heaven and Mankind. Buildings were placed according to Feng Shui, ensuring they channeled positive energy while respecting the natural terrain.",
      facts: [
        "Confucian buildings emphasize social hierarchy and order.",
        "Taoist structures prioritize alignment with natural features like mountains and water.",
        "Standardization allowed for rapid construction across the vast empire.",
        "Red and yellow were reserved for imperial use, symbolizing fire and earth."
      ]
    },
    structure: {
      title: "Structural Logic",
      quote: "Flexibility as the Highest Form of Strength.",
      longDesc: "While Western stone masonry relied on the rigid arch, Chinese timber construction utilized a post-and-lintel system of extreme modularity. The Dougong bracket system—interlocking wooden blocks that required no nails—acted as a shock absorber during earthquakes. \n\nThis structural logic allowed walls to be non-load-bearing. Walls in Chinese architecture are mere screens; they provide privacy or insulation, but the column 'forest' carries the weight of the heavens.",
      facts: [
        "Timber was preferred over stone for its resilience to seismic activity.",
        "The Yingzao Fashi (1103 AD) was the world's most advanced construction manual.",
        "Modular 'Bays' (Jian) meant parts could be prefabricated off-site.",
        "Cantilevered roofs protected wooden columns from rain and rot."
      ]
    },
    life: {
      title: "Domestic Life",
      quote: "The World Within a Courtyard.",
      contentHeading: "Peking House Plan",
      longDesc: "This diagram illustrates a standard residence where architecture enforces social order. The north hall is reserved for the parents’ suite, granting them the position of highest honor and the best sunlight, while the side wings house the children and married sons. This layout creates a safe, self-contained family world partitioned from the street.",
      images: ["img/img5.png"],
      variantHeading: "Service Courtyard Variant",
      variantDesc: "In larger estates or specific regional adaptations, secondary service courtyards were added to handle domestic logistics, housing kitchens, storage, and utility rooms separated from the formal living quarters.",
      variantImages: ["img/img6.png"],
      idealHeading: "The Ideal Peking House",
      idealDesc: "Serving as the definitive map for this section, this plan explicitly shows the Parents' Suite at the north head of the complex. The Children's Suites flank the central courtyard in the east and west wings, visually representing a microcosm of the Confucian hierarchy where every generation has its designated place of safety.\n\nThis top-down view emphasizes the walled enclosure as a defensive and private \"cell\". The interlocking tiled roofs form a continuous protective ring around the inner courtyards, illustrating how the architecture turns its back on the outside world to focus entirely on the family within.",
      idealImages: ["/img/img7.png", "/img/img8.png"],
      gardenHeading: "Medium House with Garden",
      gardenDesc: "This plan from Hangchow shows how families integrated natural beauty into the rigid courtyard structure. Even with the addition of a \"garden hall\" and decorative rockeries, the house remains centered around a series of courtyards that prioritize the privacy and collective life of the joint family.\n\nRepresenting the most expansive form of family design, this large Soochow mansion features a labyrinth of multiple courtyards and massive gardens. It reflects the scale of the great estates found in classical literature, where several hundred family members and servants lived together within a single, secure walled compound.",
      gardenImages: ["/img/img9.png", "/img/img10.png"],
      facts: [
        "Single entrance ensures security and privacy from public wards.",
        "Courtyard size was often a direct indicator of family wealth.",
        "Gardens within homes were designed to mimic wild landscapes in miniature.",
        "The screen wall (Yingbis) at the entrance blocked both wind and spirits."
      ]
    },
    power: {
      title: "Power and Order",
      quote: "The Emperor is the Pivot of the World.",
      longDesc: "Imperial architecture was designed to inspire awe and reinforce the Emperor's Mandate of Heaven. The Forbidden City, the peak of this tradition, is a masterclass in psychological scale. \n\nThe central axis of Beijing runs directly through the Emperor's throne, placing him at the literal center of the universe. The repetition of white marble terraces, massive red walls, and golden roofs created a rhythmic 'ceremonial path' that visitors had to navigate, constanty reminded of their humble status.",
      images: ["img/img11.jpg"],
      facts: [
        "Access was strictly regulated based on bureaucratic rank.",
        "Imperial palaces utilized 9,999.5 rooms (9 being the highest yang number).",
        "The Hall of Supreme Harmony is the largest single-story timber hall in China.",
        "Roof animals (Wenshou) signaled the importance and protection of a building."
      ]
    },
    cities: {
      title: "City Planning",
      quote: "Geometry as Governance.",
      longDesc: "Ancient Chinese cities were not organic growths; they were pre-planned administrative machines. Following the 'Rites of Zhou', the ideal capital was a perfect square with three gates on each side. \n\nThis grid system wasn't just for navigation; it was for control. Wards were locked at night, and commerce was restricted to specific market areas. The city was a microcosm of the empire: stable, predictable, and perfectly ordered.",
      facts: [
        "Chang'an was the first city to reach a population of one million.",
        "Outer walls reached heights of 12 meters to repel invaders.",
        "Canal systems were integrated for logistics and fire defense.",
        "The layout reflected the 'Nine Squares' well-field system of land division."
      ]
    },
    connection: {
      title: "Movement",
      quote: "Spanning the Flow of Time.",
      longDesc: "Infrastructure in ancient China combined engineering prowess with artistic elegance. Bridges were more than transit points; they were strategic military assets and focal points of community life. \n\nThe Zhaozhou Bridge, built in 605 AD, introduced the segmented arch over 700 years before European counterparts. Its open spandrels allowed floodwaters to pass through, proving that beauty and utility could coexist under the most extreme conditions.",
      facts: [
        "Segmental arches allowed for flatter, longer spans.",
        "Covered 'Wind and Rain' bridges served as social hubs in southern China.",
        "Pontoon bridges were used for rapid military deployments across larger rivers.",
        "Stone protectors (carved animals) were placed to ward off water monsters."
      ]
    },
    philosophy: {
      title: "Philosophical Core",
      quote: "Buildings as Living Organisms.",
      longDesc: "Unlike the Western obsession with eternity through stone, Chinese architecture accepted transience. A building was like a living thing: it was born, it aged, and it could be reborn through maintenance. \n\nThis 'organic' philosophy meant that style remained incredibly consistent for millennia. The focus was not on radical innovation, but on perfecting an existing, harmonic system that had already proven its worth to humanity.",
      facts: [
        "Consistency allowed for easier repairs and reconstructions.",
        "Wood was seen as a 'warm' material that breathed with the seasons.",
        "Aesthetics were secondary to structural integrity and symbolic meaning.",
        "Maintenance was viewed as a ritual act of respect for ancestors."
      ]
    }
  },
  zh: {
    idea: {
      title: "建筑理念",
      quote: "天人合一",
      longDesc: "中国古代建筑哲学不仅是为了遮风避雨，更是形而上世界观的物理表现。每一个角度、每一根木构、每一种颜色，都遵循一套旨在使人类生活与天道秩序相一致的体系。\n\n其核心是“天人合一”的概念。建筑根据风水定位，确保在尊重自然地形的同时引导正能量。",
      facts: [
        "儒家建筑强调社会等级和秩序。",
        "道家建筑优先考虑与山水等自然特征的契合。",
        "标准化生产使得在广阔疆域内快速建造成为可能。",
        "红黄两色为皇家专享，象征火与土。"
      ]
    },
    structure: {
      title: "结构逻辑",
      quote: "以柔克刚",
      longDesc: "西方石构依赖刚性拱门，而中国木构则采用极端模块化的梁柱体系。斗拱系统——无需钉子的连锁木块——在地震中起到了减震器的作用。\n\n这种结构逻辑使得墙体不承重。中国建筑中的墙仅仅是屏障，提供隐私或隔热，而柱“林”则承载着天空的重量。",
      facts: [
        "木材因其抗震性而优于石材。",
        "《营造法式》（公元1103年）是当时世界上最先进的建筑手册。",
        "模块化的“间”意味着构件可以实现异地预制。",
        "悬挑屋顶保护木柱免受雨淋和腐朽。"
      ]
    },
    life: {
      title: "居家生活",
      quote: "庭院内的世界",
      contentHeading: "北京民居平面图",
      longDesc: "本图展示了一座标准的传统民居，建筑在此强化了社会秩序。北正房为长辈居所，享有最高地位和最佳光照；厢房则供子孙及已婚儿子居住。这种布局创造了一个安全的、自给自足的、与街道隔离的家庭世界。",
      images: ["img/img5.png"],
      variantHeading: "服务院落变体",
      variantDesc: "在较大的庄园或特定的区域适配中，会增加次要的服务院落来处理家政物流，容纳与正式生活区隔离的厨房、储藏室和实用房。",
      variantImages: ["img/img6.png"],
      idealHeading: "理想的北京民居",
      idealDesc: "作为本节的权威地图，此平面图明确显示了位于建筑群北端的长辈套房。子女套房分布在中央庭院的东西厢房，形象地代表了儒家等级制度下的缩影，每一代人都有其指定的安全方位。\n\n这种鸟瞰视角强调了围墙作为防御性和私人“单元”的功能。连锁的瓦顶在内院周围形成了一个连续的保护环，说明了建筑如何背向外界，完全聚焦于内部家庭。",
      idealImages: ["/img/img7.png", "/img/img8.png"],
      gardenHeading: "带花园的中型住宅",
      gardenDesc: "这份来自杭州的平面图展示了家庭如何将自然美景融入严密的庭院结构中。尽管增加了“园厅”和装饰性的假山，住宅仍以一系列庭院为中心，优先考虑大家庭的隐私和集体生活。\n\n作为家族设计的最宏大形式，这座大型苏州宅邸拥有迷宫般的多个庭院和巨大的花园。它反映了古典文学中所见的宏伟庄园规模，数百名家族成员和仆人共同居住在一个安全的围墙大院内。",
      gardenImages: ["/img/img9.png", "/img/img10.png"],
      facts: [
        "单一人行入口确保了与公共街区的安全与隐私。",
        "庭院的大小往往是家族财富的直接指标。",
        "宅内花园的设计旨在缩摹野外景观。",
        "入口处的影壁既能挡风，也能避邪。"
      ]
    },
    power: {
      title: "权力与秩序",
      quote: "天下归心",
      longDesc: "皇室建筑旨在激发敬畏感并强化皇帝受命于天的理念。故宫作为这一传统的巅峰，是心理尺度运用的杰作。\n\n北京的中轴线直接穿过皇座，将皇帝置于宇宙的物理中心。白色大理石台基、宏大的红墙和金色的屋顶重复出现，营造出一种参观者必须行经的节奏感“礼仪路径”，不断提醒着他们的卑微地位。",
      images: ["img/img11.jpg"],
      facts: [
        "进入权限根据官职等级受到严格管制。",
        "皇宫采用了9999.5间房（9为最高阳数）。",
        "太和殿是中国现存最大的单体木构大殿。",
        "屋脊兽（吻兽）标志着建筑的重要性和受保护程度。"
      ]
    },
    cities: {
      title: "城市规划",
      quote: "几何治理",
      longDesc: "中国古代城市并非有机生长，而是预先规划好的行政机器。遵循《周礼》的原则，理想的国都应是一个每边各有三座城门的完美正方形。\n\n这种网格系统不仅是为了导航，更是为了控制。里坊在夜间会关闭，商业活动被限制在特定的市场区域。城市是帝国的微缩模型：稳定、可预测且秩序井然。",
      facts: [
        "长安是第一个人口达到百万的城市。",
        "外城墙高度可达12米，用以抵御入侵者。",
        "运河系统被整合用于物流和防火。",
        "布局反映了井田制的“九宫”土地划分思想。"
      ]
    },
    connection: {
      title: "移动与连接",
      quote: "跨越时空",
      longDesc: "中国古代的基础设施结合了工程实力与艺术优雅。桥梁不仅是交通要点，更是战略军事资产和社区生活的焦点。\n\n建于公元605年的赵州桥比西方同类桥梁早700多年引入了敞肩圆弧拱。其敞肩设计允许洪水通过，证明了美学与实用在极端条件下可以共存。",
      facts: [
        "圆弧拱允许更平坦、更长距离的跨度。",
        "覆盖式的“风雨桥”在中国南方充当社交枢纽。",
        "浮桥被用于在大江大河上进行快速军事部署。",
        "石质守护兽（石狮等）被安置用以驱避水怪。"
      ]
    },
    philosophy: {
      title: "哲学核心",
      quote: "建筑生命体",
      longDesc: "与西方通过石材追求永恒的执念不同，中国建筑接受了转瞬即逝。建筑就像一个生物：它诞生、老去，并可以通过维护重获新生。\n\n这种“有机”哲学意味着风格在几千年间保持了惊人的一致。重点不在于激进的创新，而在于完善一套既有的、和谐的、已经证明其价值的体系。",
      facts: [
        "一致性使得维修和重建更加容易。",
        "木材被视为一种能够随季节呼吸的“温暖”材料。",
        "美学次于结构完整性和象征意义。",
        "维护被视为对祖先表达敬意的仪式行为。"
      ]
    }
  }
};
