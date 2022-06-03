$(".content-vehicle-infos-title").click(()=>{
    if($(".content-vehicle-infos-selection-top").hasClass("animating")==false){
        $(".content-vehicle-infos-selection-top").toggleClass("animating");
    }
    else{
        $(".content-vehicle-infos-selection-top").removeClass("animating");
    }
})
// $(".container-vechile-item-infos-button-add").click((e)=>{
//     console.log(e.target.parentElement.lastElementChild);
//     let ev = e.target.parentElement.lastElementChild;
//     console.log(ev.classList);

//     if($(".container-vechile-item-infos-button-add-option").hasClass("add")==false){
//         $(".container-vechile-item-infos-button-add-option").toggleClass("add");

//     }else{
//         $(".container-vechile-item-infos-button-add-option").removeClass("add");

//     }
// })