
function scroll_back(obj)
{
    var scroll = document.getElementsByClassName("box-movie-list")
    scroll[obj].scrollLeft = scroll[obj].scrollLeft - 400 
}

function scroll_next(obj)
{
    var scroll = document.getElementsByClassName("box-movie-list")
    scroll[obj].scrollLeft = scroll[obj].scrollLeft + 400
}