mermaid.initialize({ startOnLoad: true });

const chartDefinition = `
  graph LR
    A[Start] --> B{Rheumatoid Arthritis?}
    B -->|Yes| C[Perform further tests]
    B -->|No| D[Consider other diagnoses]
    C --> E[Initiate treatment plan]
`;

mermaid.render('mermaidChart', chartDefinition, (svgGraph) => {
  document.getElementById('mermaidChart').innerHTML = svgGraph;
});
