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