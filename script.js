const toggleButton = document.getElementById('toggle-button');
const toggleCircle = document.getElementById('toggle-circle');
const title = document.getElementById('title');
const heading = document.getElementById('heading');
const darkMode = document.getElementById('dark-mode');
const cardDiv = document.querySelectorAll('.grid-boxes');
const body = document.getElementById('body');
const dashboardContainer = document.querySelector('.dashbord-container');
const hr = document.getElementById('hr');
const followerNum = document.querySelectorAll('.followers-num');
const handleText = document.querySelectorAll('.handle');
const overviewGrid = document.querySelectorAll('.second-grid');
const overviewTitle = document.getElementById('overview-title');
const amountNum = document.querySelectorAll('.amt-div');
const fullWidth = document.querySelector('.full-width');

var count = 0;

toggleCircle.classList.add('circle-move-right');
darkMode.innerText = 'Light Mode';



function toggleStuff(count){

        if (count == 0){
          //Light
          
        } else {
         
            //Dark
            
            
        }


}

function changeTheme(){
   
    if (count == 0){
        if (toggleCircle.classList.contains('circle-move-right')){
            toggleCircle.classList.remove('circle-move-right');
        }

        // Dark
        toggleCircle.classList.add('circle-move-left');
        darkMode.innerText = 'Dark Mode';
        title.style.color = 'hsl(0, 0%, 100%)';
        heading.style.color = 'hsl(228, 34%, 66%)';
        darkMode.style.color = 'hsl(228, 34%, 66%)';
        // cardDiv.style.color = 'orange';
        cardDiv.forEach(x => {
            x.style.backgroundColor = 'hsl(228, 28%, 20%)';
        
        });


       

        followerNum.forEach(x => {
            x.style.color = '#fff';
        });

        handleText.forEach(x => {
            x.style.color = 'hsl(228, 34%, 66%)';
        });

        overviewGrid.forEach(x => {
            x.style.backgroundColor = 'hsl(228, 28%, 20%)';
        });

        

        body.style.backgroundColor = 'hsl(230, 17%, 14%) ';
        dashboardContainer.style.backgroundColor = 'hsl(232, 19%, 15%)';
        toggleCircle.style.backgroundColor = 'hsl(230, 17%, 14%)';
        // toggleButton.style.backgroundColor = 'hsl(227, 47%, 91%)';
        toggleButton.style.backgroundImage='linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))';
        overviewTitle.style.color = 'hsl(228, 34%, 66%)';  
        amountNum.forEach(x => {
            x.style.color = '#fff';
        });
        fullWidth.style.backgroundColor = 'hsl(232, 19%, 15%)';
        count++;
        console.log(toggleButton.classList)
    }

  else  if (count == 1){
      //Light
    toggleCircle.classList.add('circle-move-right');
    toggleCircle.classList.remove('circle-move-left');
    
    count--;
    darkMode.innerText = 'Light Mode';
    title.style.color = '#000';
    heading.style.color = 'gray';
    darkMode.style.color = 'gray';
    cardDiv.forEach(x => {
        x.style.backgroundColor = 'hsl(227, 47%, 96%)';
    });

    followerNum.forEach(x => {
        x.style.color = '#000';
    });

    handleText.forEach(x => {
        x.style.color = 'gray';
    });

    overviewGrid.forEach(x => {
        x.style.backgroundColor = 'hsl(227, 47%, 96%)';
        
    });


  

    

    body.style.backgroundColor = '#fff';
   
    dashboardContainer.style.backgroundColor = 'hsl(227, 47%, 96%)';
   
    toggleCircle.style.backgroundColor = '#fff';
    toggleButton.style.backgroundImage='linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))';
    overviewTitle.style.color = 'gray'; 
    amountNum.forEach(x => {
        x.style.color = '#000';
    });
    fullWidth.style.backgroundColor = 'hsl(227, 47%, 96%)'
    console.log(toggleButton.classList)
    }


    
}

// function highlightOn(event) {
//     event.target.style.backgroundColor = 'hsl(232, 19%, 15%)';
//   };
//   function highlightOff(event) {
//     event.target.style.backgroundColor = 'none';
//   };


toggleButton.addEventListener('click', () => {
    changeTheme();
});

toggleButton.addEventListener('mouseover', (event) => {
    toggleButton.style.backgroundImage='linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))';
    });

    toggleButton.addEventListener('mouseout', (event) => {
        toggleButton.style.backgroundImage='none';
        });

        // for (let i = 0; i < cardDiv.length; i++) {
        //     cardDiv[i].addEventListener('mouseenter', highlightOn);
        //     cardDiv[i].addEventListener('mouseleave', highlightOff);
        //   };

        //   for (let i = 0; i < overviewGrid.length; i++) {
        //     overviewGrid[i].addEventListener('mouseenter', highlightOn);
        //     overviewGrid[i].addEventListener('mouseleave', highlightOff);
        //   };



