$('document').ready(function(){
    $('.sidenav').sidenav()
    $('.materialboxed').materialbox()
    $('.parallax').parallax()
    $('.carousel').carousel({
        numVisible: 5
    });
    $('.datepicker').datepicker({
        disableWeekends: false
    })
    $('.tooltipped').tooltip()
    $('.scrollspy').scrollSpy()
    $('.modal').modal()
})