<!DOCTYPE html>
<html>
<head>
    <title>RA_SLE</title>
    <meta charset="utf-8">
    <script src="https://cdn.jsdelivr.net/npm/mermaid@8.13.5/dist/mermaid.min.js"></script>
    <script>
        window.addEventListener('DOMContentLoaded', (event) => {
            mermaid.initialize({ startOnLoad: true });
        });
    </script>
</head>
<body>
    <div class="mermaid">
        graph LR
        A(抗原提呈) --> B(II型胶原蛋白)
        B --> C1(树突状细胞)
        B --> C2(其他抗原提呈细胞)
      
        C1 --> D(T细胞激活)
        C2 --> D
        D --> E1(CD4+ T细胞)
        E1 --> F(Th17细胞)
        F --> G1(炎性因子产生)
        G1 --> G2(TNF治疗靶点TNFα抑制剂如英夫利昔单抗)
        G1 --> G3(IL-6治疗靶点IL-6抑制剂如托珠单抗)
        G1 --> G4(IL-17治疗靶点IL-17抑制剂 如西可珠单抗)
      
        B --> H(B细胞激活)
        H --> I(MHC-II分子)
        H --> J(MZ B细胞)
        J --> K(浆细胞)
        K --> L(自身抗体分泌治疗靶点B细胞抑制剂如利妥昔单抗)
      
        G1 --> M(炎症反应)
        G2 --> M
        G3 --> M
        G4 --> M
        L --> M
      
        M --> N1(组织损伤与破坏)
        M --> N2(神经末梢敏化)
        M --> N3(炎症介质释放)
        N1 --> O(疼痛产生)
        N2 --> O
        N3 --> O
        G2 --> N3
        G3 --> N3
        G4 --> N3
      
        N2 --> P(神经调节机制)
        P --> O
      
        G1 --> R(免疫抑制剂治疗靶点如来氟米特片)
        N3 --> S(非甾体抗炎药治疗如美洛昔康片)
      
      

    </div>
</body>
</html>
