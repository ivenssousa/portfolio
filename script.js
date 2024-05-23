document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.project');

    projects.forEach(project => {
        project.addEventListener('click', function() {
            const projectId = this.getAttribute('data-id');
            alert(`Você clicou no Projeto ${projectId}`);
            // Aqui você pode redirecionar para uma página de detalhes do projeto ou abrir um modal com mais informações
        });
    });
});
