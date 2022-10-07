import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons"

const FursonaHero = [
  {
    img: "https://res.cloudinary.com/skepfusky-dookie/image/upload/w_720/v1662975456/fursonas/comm_for_davey_g2_i3nmhp.png",
    artist: "catastrophe#6282",
    social: faDiscord
  },
  {
    img: "https://res.cloudinary.com/skepfusky-dookie/image/upload/w_720/v1665117048/fursonas/blushy_virgin_trans_ebbkdj.png",
    artist: "skepfusky",
    social: faTwitter
  }
]

const HobbyItems = [
  {
    title: "Video editing & Film",
    description: (
      <>
        With nearly a decade of experience editing videos and getting into the
        VFX and filmography scene with complex motion graphics.
      </>
    ),
    link: "#"
  },
  {
    title: "Music production",
    description: (
      <>
        I do self-produce mostly indie and mostly experimental music - releasing
        2 albums and 5 EPs since 2017!
      </>
    ),
    linkName: "View Discography",
    link: "#"
  },
  {
    title: "Web development",
    description: (
      <>
        A recent interest of mine that has taken me over a year to get decent
        grasp at in terms of design and fair understanding of back-end
        development.
      </>
    ),
    link: "#"
  },
  {
    title: "UI/UX design",
    description: (
      <>
        I've been alawys entrigued with user interfaces since at a young age,
        with every single detail of it - including its functionality.
      </>
    )
  },

  {
    title: "Data science",
    description: (
      <>
        Along side web dev, I've a niche for visual graphs despite being bad at
        math that I decided to take data science with Python.
      </>
    )
  },
  {
    title: "Draw furries (kinda)",
    description: (
      <>
        Although yes I can <i>technically</i> draw, but only on the head, and
        I'm bad at everything else because I'm not a professional artist by any
        means lol
      </>
    )
  }
]

const VideoItems = [
  {
    title: "YTPs",
    description: <>One of the dumbest things I've put a lot of effort in</>,
    id: "7ubbQKBQyg4",
    videoTitle: "YouTube Poops",
    videoDesc: "Yeah this is dumb lmao"
  },
  {
    title: "Vlogs/Edits",
    description: <>Vlogs and edits during vacations or my senior years</>,
    id: "4uUjRlgUEnY",
    videoTitle: "Vlogs & Edits",
    videoDesc: "Stuff for family vacations and other stuff"
  },
  {
    title: "Music videos",
    description: <>Music videos from my shitty music lol</>,
    id: "vioAgEgk2O0",
    videoTitle: "Music Videos",
    videoDesc: "Something to accompany to my music works, I guess lol"
  },
  {
    title: "School projects",
    description: <>Some school projects also from my high school years</>,
    id: "zIPay0PwumY",
    videoTitle: "School projects",
    videoDesc:
      "These are videos that I've made for end of the year highlights or just group projects I've submitted"
  }
]

export { FursonaHero as sonas, HobbyItems as hobbies, VideoItems as videos }