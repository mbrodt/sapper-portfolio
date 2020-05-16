<script>

const timelineData = [
    {
				title: 'Started coding in highschool',
				text: "I first dipped my toes into coding on Codecademy.com. This was in highschool, and it was very basic with HTML, CSS and some JavaScript",
        date: '2013',
    },
    {
				title: 'Began studying Business Economics and IT ',
				text: "I started the programme at Copenhagen Business School (CBS), but quickly found out that I was less into the economics, and more into the IT",
        date: 'Summer, 2014',
    },
    {
				title: 'Began studying Software Development',
				text: "Realizing that IT was my passion, I started the Software Development bachelors programme at the IT University of Copenhagen (a 3 year study)",
        date: 'Summer, 2016',
    },
    {
				title: 'Student front-end developer at Alm. Brand',
				text: "Midway through my bachelor programme, I got my first coding job. At ITU we mostly did back-end development, but I was learning front-end on my own at the same time. This was my first real job, and my first professional experience with front-end development",
        date: 'Spring, 2018',
    },
    {
				title: 'Front-end developer at ajukreizi',
				text: "My second coding job began as a student front-end developer, but once I finished my studies in the summer of 2019, I transitioned into a full-time role at the company. I am in charge of the front-end architecture for a wide variety of clients, from static brochure sites and e-commerce shops to interactive web applications ",
        date: 'Spring, 2019',
    },

];
</script>

<style>
.timeline-container {
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 40px 0;
}

.timeline-container::after {
    background-color: #fc8181;
    content: '';
    position: absolute;
    left: calc(50% - 2px);
    width: 4px;
    height: 100%;
}

.timeline-item {
    display: flex;
    justify-content: flex-end;
    padding-right: 30px;
    position: relative;
    margin: 10px 0;
    width: 50%;
}

.timeline-item:nth-child(odd) {
    align-self: flex-end;
    justify-content: flex-start;
    padding-left: 30px;
    padding-right: 0;
}

.timeline-item-content {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: relative;
    text-align: right;
}

.timeline-item-content::after {
    content: ' ';
    background-color: #fff;
    box-shadow: 1px -1px 1px rgba(0, 0, 0, 0.2);
    position: absolute;
    right: -7.5px;
    top: calc(50% - 7.5px);
    transform: rotate(45deg);
    width: 15px;
    height: 15px;
}

.timeline-item:nth-child(odd) .timeline-item-content {
    text-align: left;
    align-items: flex-start;
}

.timeline-item:nth-child(odd) .timeline-item-content::after {
    right: auto;
    left: -7.5px;
    box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.2);
}

.timeline-item-content .circle {
    background-color: #fff;
    border: 3px solid #fc8181;
    border-radius: 50%;
    position: absolute;
    top: calc(50% - 10px);
    right: -40px;
    width: 20px;
    height: 20px;
    z-index: 100;
}

.timeline-item:nth-child(odd) .timeline-item-content .circle {
    right: auto;
    left: -40px;
}

@media only screen and (max-width: 640px) {
    .timeline-item-content,
    .timeline-item:nth-child(odd) .timeline-item-content {
      
        text-align: center;
        align-items: center;
		}
}
</style>

  <div class="timeline-container">
	    {#each timelineData as data}
			<div class="timeline-item">
        <div class="timeline-item-content p-2 sm:p-4 max-w-lg">
          
            <time class="text-gray-600 tracking-wider text-xs sm:text-sm uppercase font-semibold">{data.date}</time>
            <h3 class="sm:text-xl text-gray-800 font-semibold my-1">{data.title}</h3>
            <p class="text-sm sm:text-base text-gray-800">{data.text}</p>
            <span class="circle" />
        </div>
    </div>
		{/each}
</div>

