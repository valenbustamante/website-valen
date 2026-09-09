export type ProjectCategory = "data" | "ml";
export type Project = {
  category: ProjectCategory;
  title: { en: string; es: string };
  tools: string[];
  summary: { en: string; es: string };
  details: { en: string[]; es: string[] };
  metrics: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    category: "data",
    title: {
      en: "Geospatial & Statistical Analysis of Colorectal Cancer Mortality in Colombia",
      es: "Análisis geoespacial y estadístico de la mortalidad por cáncer colorrectal en Colombia",
    },
    tools: [
      "Python",
      "pandas",
      "GeoPandas",
      "libpysal",
      "esda",
      "scikit-learn",
      "Folium",
      "DANE",
    ],
    summary: {
      en: "Analyzed mortality trends from 1985–2019 and regional comorbidity clusters using statistical methods.",
      es: "Analicé tendencias de mortalidad entre 1985–2019 y clústeres regionales de comorbilidad mediante métodos estadísticos.",
    },
    details: {
      en: [
        "Integrated DANE death-certificate records for colorectal cancer (ICD-10 C18–C21), population estimates, and departmental geometries across Colombia.",
        "Calculated standardized mortality ratios and compared spatial-weight matrices, selecting sphere-of-influence weights for 2009–2017 and KNN-3 for 2018–2019 using AIC.",
        "Measured global spatial autocorrelation across 33 units: Moran’s I was significant in 2009–2011 (0.732, p = 0.023) and especially 2015–2017 (0.914, p = 0.005).",
        "Built co-occurrence profiles from 13 death-certificate cause fields to characterize circulatory, endocrine, respiratory, digestive, and tumor-related comorbidities.",
        "Applied elbow-selected K-Means to define five departmental comorbidity clusters and surface territorial differences relevant to public-health planning.",
      ],
      es: [
        "Integré registros de certificados de defunción DANE para cáncer colorrectal (CIE-10 C18–C21), estimaciones poblacionales y geometrías departamentales de Colombia.",
        "Calculé razones de mortalidad estandarizada y comparé matrices de pesos espaciales, seleccionando esfera de influencia para 2009–2017 y KNN-3 para 2018–2019 mediante AIC.",
        "Medí autocorrelación espacial global en 33 unidades: el I de Moran fue significativo en 2009–2011 (0.732, p = 0.023) y especialmente en 2015–2017 (0.914, p = 0.005).",
        "Construí perfiles de coocurrencia a partir de 13 campos de causa de defunción para caracterizar comorbilidades circulatorias, endocrinas, respiratorias, digestivas y tumorales.",
        "Apliqué K-Means, con número de clústeres seleccionado por elbow method, para definir cinco perfiles departamentales y evidenciar diferencias territoriales relevantes para salud pública.",
      ],
    },
    metrics: [
      { label: "Territorial units", value: "33" },
      { label: "Peak Moran's I", value: "0.9143" },
      { label: "K-Means clusters", value: "5" },
    ],
  },
  {
    category: "ml",
    title: {
      en: "Hourly Wind Forecasting with Meta-Ensemble",
      es: "Pronóstico horario de viento con meta-ensamble",
    },
    tools: ["Python", "scikit-learn", "SVR-RBF", "Stacking Regressors"],
    summary: {
      en: "Built a stacked ensemble model with hyperparameter tuning to forecast hourly wind power from meteorological features.",
      es: "Construí un modelo de ensamble apilado con ajuste de hiperparámetros para pronosticar potencia eólica horaria.",
    },
    details: {
      en: [
        "Framed a 24-hour wind-speed forecasting problem using 13 hourly variables: wind direction and speed, relative humidity, minimum/maximum humidity, minimum/maximum temperature, atmospheric pressure, precipitation, and maximum gusts.",
        "Prepared the dataset through renaming, missing-value validation, univariate distributions, boxplots, target-versus-feature regplots, and a correlation matrix that removed two redundant predictors.",
        "Used cross-validation and RMSE, MAPE, MAE, R², Ljung-Box, and Jarque-Bera diagnostics to compare candidate models and assess both predictive error and residual behavior.",
        "Tuned eight benchmark regressors: KNN, Ridge, Lasso, Decision Tree, Random Forest, XGBoost, SVR, and linear regression.",
        "Designed the original stacking ensemble with three independently trained base learners whose predictions feed a tuned SVR-RBF meta-learner (C = 0.31, gamma = auto). The SVR-RBF stack achieved R² = 0.853594, RMSE = 0.568812, MAE = 0.501322, and MAPE = 14.56%.",
      ],
      es: [
        "Formulé un problema de pronóstico de velocidad del viento a 24 horas usando 13 variables horarias: dirección y velocidad del viento, humedad relativa, humedad mínima/máxima, temperatura mínima/máxima, presión atmosférica, precipitación y ráfaga máxima.",
        "Preparé el conjunto mediante renombrado, validación de faltantes, distribuciones univariadas, boxplots, regplots de objetivo contra variables y una matriz de correlación que eliminó dos predictores redundantes.",
        "Usé validación cruzada y diagnósticos RMSE, MAPE, MAE, R², Ljung-Box y Jarque-Bera para comparar modelos y evaluar tanto error predictivo como comportamiento de residuos.",
        "Ajusté ocho regresores benchmark: KNN, Ridge, Lasso, Decision Tree, Random Forest, XGBoost, SVR y regresión lineal.",
        "Diseñé el ensamble stacking original con tres modelos base entrenados de forma independiente cuyas predicciones alimentan un meta-aprendiz SVR-RBF ajustado (C = 0.31, gamma = auto). El stack SVR-RBF alcanzó R² = 0.853594, RMSE = 0.568812, MAE = 0.501322 y MAPE = 14.56%.",
      ],
    },
    metrics: [
      { label: "Meta-learner", value: "SVR-RBF" },
      { label: "Forecast", value: "24 hours" },
    ],
  },
  {
    category: "ml",
    title: {
      en: "E-Mobility Crash Narrative NLP & Risk Pattern Analysis",
      es: "NLP de narrativas de siniestros de e-movilidad y análisis de riesgo",
    },
    tools: ["Python", "pandas", "TensorFlow/PyTorch", "Clustering"],
    summary: {
      en: "An ongoing research project exploring data-informed approaches to e-mobility safety.",
      es: "Un proyecto de investigación en curso que explora enfoques basados en datos para la seguridad en e-movilidad.",
    },
    details: {
      en: [
        "Exploring research questions at the intersection of e-mobility, mobility safety, and applied data science.",
        "Developing an analytical direction for understanding emerging safety patterns.",
        "Project details and public materials will be shared as the research progresses.",
      ],
      es: [
        "Exploro preguntas de investigación en la intersección entre e-movilidad, seguridad vial y ciencia de datos aplicada.",
        "Desarrollo una dirección analítica para comprender patrones emergentes de seguridad.",
        "Los detalles del proyecto y materiales públicos se compartirán a medida que avance la investigación.",
      ],
    },
    metrics: [
      { label: "Status", value: "Ongoing" },
      { label: "Focus", value: "E-mobility safety" },
    ],
  },
];

export const projectExtras: Record<
  string,
  {
    status?: { en: string; es: string };
    actions: { label: string; href?: string }[];
    gallery: { src: string; caption: { en: string; es: string } }[];
  }
> = {
  "Geospatial & Statistical Analysis of Colorectal Cancer Mortality in Colombia":
    {
      actions: [
        {
          label: "Read project report",
          href: "https://drive.google.com/file/d/1ONOhpL94iZeqCsa59muNG78ULiSVZjez/view?usp=sharing",
        },
        {
          label: "View presentation slides",
          href: "https://drive.google.com/file/d/1_QpDfuSiSDKa-ykRIe1CtNIX8xC04aLS/view?usp=sharing",
        },
      ],
      gallery: [
        {
          src: "/img/colorectal-cancer/coocurrence-matrix.png",
          caption: {
            en: "Co-occurrence heatmap of diagnostic categories reported together in colorectal-cancer death certificates, highlighting tumor, circulatory, endocrine, respiratory, and digestive patterns.",
            es: "Mapa de calor de coocurrencia de categorías diagnósticas reportadas conjuntamente en certificados de defunción por cáncer colorrectal, destacando patrones tumorales, circulatorios, endocrinos, respiratorios y digestivos.",
          },
        },
        {
          src: "/img/colorectal-cancer/comorbilities.png",
          caption: {
            en: "Frequency ranking of the most common tumor-related comorbidities. Lung metastasis and liver/gallbladder metastasis appear most often in the analyzed death records.",
            es: "Ranking de frecuencia de las comorbilidades tumorales más comunes. La metástasis pulmonar y la metástasis en hígado/vesícula biliar aparecen con mayor frecuencia en los registros analizados.",
          },
        },
      ],
    },
  "Hourly Wind Forecasting with Meta-Ensemble": {
    actions: [
      {
        label: "View presentation slides",
        href: "https://drive.google.com/file/d/1BGNyftSLCC6dhnDTZJt27n30wnmXRDvd/view?usp=sharing",
      },
      {
        label: "Open wind-speed dashboard",
        href: "https://dashboard-wind-speed-a5b8.onrender.com/proyecto",
      },
    ],
    gallery: [
      {
        src: "/img/wind-speed/predictions.png",
        caption: {
          en: "SVR-RBF meta-learner predictions across the training, validation, and test partitions, shown alongside the observed wind-speed values.",
          es: "Predicciones del meta-aprendiz SVR-RBF en las particiones de entrenamiento, validación y prueba, mostradas junto a los valores observados de velocidad del viento.",
        },
      },
      {
        src: "/img/wind-speed/model-map.png",
        caption: {
          en: "Initial stacking design: linear regression, Lasso, Ridge, and XGBoost base learners produce predictions that feed meta-learner selection and hyperparameter tuning.",
          es: "Diseño inicial de stacking: los modelos base de regresión lineal, Lasso, Ridge y XGBoost producen predicciones que alimentan la selección y el ajuste de hiperparámetros del meta-aprendiz.",
        },
      },
      {
        src: "/img/wind-speed/final-model-map.png",
        caption: {
          en: "Final stacking architecture: base-learner predictions are combined by an SVR-RBF meta-learner configured with C = 0.31 and gamma = auto.",
          es: "Arquitectura final de stacking: las predicciones de los modelos base son combinadas por un meta-aprendiz SVR-RBF configurado con C = 0.31 y gamma = auto.",
        },
      },
    ],
  },
  "E-Mobility Crash Narrative NLP & Risk Pattern Analysis": {
    status: {
      en: "Ongoing research project: the work has just started.",
      es: "Proyecto de investigación en curso: el trabajo acaba de empezar.",
    },
    actions: [{ label: "Research update coming soon" }],
    gallery: [],
  },
};
