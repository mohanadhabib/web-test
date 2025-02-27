document.querySelectorAll('.my-nav-link').forEach(
    item => {
            item.addEventListener('click', () => {
                if (window.innerWidth < 450) {
                    var bsOffcanvas = bootstrap.Offcanvas.getInstance(document.getElementsByClassName('offcanvas')[0]);
                    bsOffcanvas.hide();
                }
            }
        )
    }
);