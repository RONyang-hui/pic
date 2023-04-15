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
        graph TB
        RA_SLE_Differences(RA和SLE的不同点) --> RA_Target(主要影响关节)
        RA_SLE_Differences --> SLE_Target(多个器官系统受累)

        AntigenPresentation(抗原提呈) --> APC_RA{RA: 关节滑膜细胞, 成纤维细胞, 巨噬细胞}
        AntigenPresentation --> APC_SLE{SLE: 树突状细胞, B细胞, 单核细胞}

        APC_RA --> RA_Antigens{自身抗原: RF, ACPA}
        APC_SLE --> SLE_Antigens{自身抗原: ANA, 抗双链DNA}

        TCellActivation(T细胞激活) --> Th1_RA{RA: Th1, Th17, Tfh}
        TCellActivation --> Th2_SLE{SLE: Th2, Tfh}

        Th1_RA --> Cytokines_RA{细胞因子: IFN-γ, IL-17, IL-21}
        Th2_SLE --> Cytokines_SLE{细胞因子: IL-4, IL-10, IL-21}

        BCellActivation(B细胞激活) --> BCell_RA{RA: 关节滑膜类滤泡结构}
        BCellActivation --> BCell_SLE{SLE: 淋巴结或脾脏滤泡结构}

        subgraph RA相关
        RA_Target
        APC_RA
        RA_Antigens
        Th1_RA
        Cytokines_RA
        BCell_RA
        end

        subgraph SLE相关
        SLE_Target
        APC_SLE
        SLE_Antigens
        Th2_SLE
        Cytokines_SLE
        BCell_SLE
        end

    </div>
</body>
</html>
