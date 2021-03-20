# Wildhouse-Pictures-Landing-Page-
I had the privilege of working with Wildhouse Pictures on this project to help them deliver a one of a kind landing page experience for users who were looking to access their website. For this project, I was tasked with creating a split page that would allow users to select between visiting Wildhouse Picture's main website or their subsidiary's website The Elements. The twist here was they wanted to have their reel videos as the placeholder for people to click and route to the respective pages. On a high overview it may seem simple, but there were many blockers that had to be overcome. 

# 1 - Video Size

User experience was our biggest concern on this project. If we were looking to have videos as placeholders on the page we needed to make sure the video sizes were as small as possible. To achieve that we decided to export the video into a 6 second clip and compress it, bringing the video to less than 1MB in total! Although pretty high in size still, this was a fair enough size to offer users the chance to experience the video loop on both mobile and desktop view. This impacted the quality of the video, but by taking this route, we were able to offer users across all types of devices the same experience. 

# 2 - Animation Lag

Part of the user experience was expanding the containers width whenever users hovered on the respective containers. As we began development, we faced a lag issue where in the act of animating the width , the video playback paused to adjust to the new width size. To debug this issue, we tested out different animation delays and successfully identified an animation delay time that allowed the video to adjust to the new width without lagging. 

# 3 - Cache

Given that the videos being used were still pretty large in size we had to figure out a way to make the first time the video loaded the only time it would take the video that long to load. In order to do so, we created a manifest that would cache those videos in the users browsers so that whenever they revisited the site, they would load the cached version of the videos, cutting down on the load time and improving the user experience. 

# 4 - Fallback Options

In order to accomadate all users we created a fallback option for users with devices that did not support video playback. The fallback? A compressed GIF version of the video. This allowed for a consistent user experience despite not being able to have video playback. The only downside to this issue was file size, as the GIF itself was larger than the mp4 video. 

Overall, this project was fun since it gave me the opportunity to keep thinking more about optimization and improving user experience. 

*** We decided to go with using static images of the companies logos instead of the videos since the video quality was decreased due to compression. If you're looking to recreate the experience with an image, just replace the video tags with an img tag, and append the style from the video tag to the img tag. ***
