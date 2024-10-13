function redirectToPage() {
    window.location.href = 'WikiComp.html';
}
function showContent(topicId){
    const topics=document.querySelectorAll('.topic')
    topics.forEach(topic =>{
        topic.style.display='none';
    });

    const selectedTopic=document.getElementById(topicId);
    selectedTopic.style.display='block';

}
function opNav(){
    document.querySelector(".menuOculto").style.width="250px";
    document.querySelector(".content").style.marginLeft="250px";


}
function clNav(){
    document.querySelector(".menuOculto").style.width="0px";
    document.querySelector(".content").style.marginLeft="0px";


}