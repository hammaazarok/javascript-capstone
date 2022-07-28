const countShows = (shows)=>{
if (shows === undefined){
    return "shows are not defined";
}else if (shows.length<1) {
    return "there is no show yet on this category";
}
else {
   return shows.length;
}
}

export default countShows