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
        A(巨噬细胞)
        A --> B(识别异物后)
        B --> C(释放 IL-1)
        C --> IL1(阿纳金拉)
        B --> D(释放 IL-6)
        D --> IL6(托珠单抗)
        B --> E(释放 TNFα)
        E --> TNF(英夫利昔单抗)
        E --> F(引发白细胞的趋化作用破坏组织细胞)
        F --> DMARDs(DMARDs)
        F --> G(趋化)
        F --> H(吞噬)
        F --> I(网状胶原酶释放)
        F --> J(依赖于氧气的NADPH)
        F --> K(不依赖氧气_释放细胞内的溶菌酶)
        K --> L(滑膜)
        L --> M(滑液产生)
        L --> N(细胞增殖)
        L --> O(趋化因子与细胞因子释放)
        K --> P(纤维母细胞)
        P --> Q(细胞增殖)
        P --> R(细胞因子与趋化因子释放)
        P --> S(胶原合成与降解)
        K --> T(血管)
        K --> U(骨质破坏)
        U --> V(软骨)
        U --> W(软骨细胞)
        U --> X(维持软骨组织结构)
        U --> Y(胶原与蛋白多糖合成)
        K --> Z(组织破坏)
        Z --> Z1(滑膜炎)
        Z --> Z2(骨侵蚀)
        Z --> Z3(软骨破坏)
        
        A --> AA(抗原提呈)
        AA --> CTLA(CTLA4-Ig)
        AA --> AB(T淋巴细胞)
        AB --> AC(T-kill)
        AC --> AD(破坏组织细胞)
        AB --> AE(Th-help)
        AE --> AF(激活B细胞产生抗体)
        AF --> Ritux(利妥昔单抗)
        AF --> AG(细胞毒性作用_ADCC破坏组织细胞的方式)
        AF --> AH(经典途径激活了补体)
        AH --> AI(C5b)
        AH --> AJ(C3a)
        AJ --> AK(肥大细胞)
        AK --> Al(组织胺)
        AH --> AM(C3b)
        AM --> AN(MAC破坏组织细胞的方式)
        A --> AO(细胞膜的膜磷脂)
        AO --> AP(磷脂酶)
        AP --> Glucocorticoids(糖皮质激素抑制磷脂酶)
        AP --> AQ(AA花生四烯酸)
        AQ --> AR(脂氧酶)
        AR --> AS(白三烯LT)
        AS --> AT(白细胞的趋化作用)
        AQ --> AU(COX)
        AU --> AV(COX-1生理性前列腺素合成)
        AV --> AW(PGI2)
        AV --> AX(PGE2)
        AV --> AY(PGF2α)
        AV --> AZ(TXA2)
        AU --> BA(COX-2炎症性前列腺素合成)
        BA --> BB(PGI2)
        BA --> BC(PGE2)
        BC --> BD(发热导致疼痛)
        BA --> BE(PGF2α)
        BA --> BF(TXA2)
        AU --> BG(COX抑制_缓解炎症_NSAIDs)
        BG --> BH(非选择性COX抑制剂)
        BH --> BI(阿司匹林)
        BH --> BJ(布洛芬)
        BH --> BK(氨基比林)
        BH --> BL(消炎痛)
        BG --> BM(选择性COX-2抑制剂)
        BM --> BN(洛昔康)
        BM --> BO(塞来昔布)
        BM --> BP(罗非昔布)
      
      
    </div>
</body>
</html>
