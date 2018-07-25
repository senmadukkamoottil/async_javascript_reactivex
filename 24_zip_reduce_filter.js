/*
Retrieve each video's id, title, middle interesting moment time, and smallest box art url.

Here interesting moments collection, each representing a time during which a screenshot is interesting or
 representative of the title as a whole. Notice that both the boxarts and interestingMoments arrays are 
 located at the same depth in the tree. Retrieve the time of the middle interesting moment and the smallest 
 box art url simultaneously with zip().
 Return an {id, title, time, url} object for each video.
*/

function getData() {
	var movieLists = [
			{
				name: "New Releases",
				videos: [
					{
						"id": 70111470,
						"title": "Die Hard",
						"boxarts": [
							{ width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
							{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 4.0,
						"interestingMoments": [
							{ type: "End", time:213432 },
							{ type: "Start", time: 64534 },
							{ type: "Middle", time: 323133}
						]
					},
					{
						"id": 654356453,
						"title": "Bad Boys",
						"boxarts": [
							{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
							{ width: 140, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" }

						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 5.0,
						"interestingMoments": [
							{ type: "End", time:54654754 },
							{ type: "Start", time: 43524243 },
							{ type: "Middle", time: 6575665}
						]
					}
				]
			},
			{
				name: "Instant Queue",
				videos: [
					{
						"id": 65432445,
						"title": "The Chamber",
						"boxarts": [
							{ width: 130, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
							{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 4.0,
						"interestingMoments": [
							{ type: "End", time:132423 },
							{ type: "Start", time: 54637425 },
							{ type: "Middle", time: 3452343}
						]
					},
					{
						"id": 675465,
						"title": "Fracture",
						"boxarts": [
							{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
							{ width: 120, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
							{ width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 5.0,
						"interestingMoments": [
							{ type: "End", time:45632456 },
							{ type: "Start", time: 234534 },
							{ type: "Middle", time: 3453434}
						]
					}
				]
			}
		];

  //The code using arrow function
  console.log(
    movieLists.concatMap(movieLists => movieLists.videos.
    	concatMap(videos => 
      	Array.zip(
					videos.boxarts.reduce((acc, cur) => acc.width*acc.height<cur.width*cur.height?acc:cur),
					videos.interestingMoments.filter(item => item.type === 'Middle')  
            ,(boxarts,interestingMoments) =>
                                            ({	id: videos.id, 
                                                title: videos.title,
                                                boxarts: boxarts.url,
                                              	interestingMoments: interestingMoments.time})
              )
                            
                            )));
  
  
  
  
  
  
  
  
	//------------ COMPLETE THIS EXPRESSION --------------
	return movieLists.concatMap(function(movieList) {
		return movieList.videos.concatMap(function(video) {
			return Array.zip(
				video.boxarts.reduce(function(acc,curr) {
					if (acc.width * acc.height < curr.width * curr.height) {
				  	  	return acc;
					}
					else {
				  		return curr;
					}
			  	}),
				video.interestingMoments.filter(function(interestingMoment) {
					return interestingMoment.type === "Middle";
				}),
			  	function(boxart, interestingMoment) {
					return {id: video.id, title: video.title, time: interestingMoment.time, url: boxart.url};
			  	});
		});
	});
}
		