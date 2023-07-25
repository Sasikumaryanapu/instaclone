import {create} from "zustand" 
 
 const useBearStore = create((set) => ({
    login:false,
    setLogin:()=>set(()=>({login:true})),
    avatar:" ",
    changeAvatar:(picture)=>set(()=>({avatar:picture})),
    profile_pic:" ",
    setProfile_pic:(picture)=>set(()=>({profile_pic:picture})),
    flag:false,
    setFlag:(state)=>set(()=>({flag:!state.flag})),
    status:false,
    setStatus:()=>set(()=>({status:true})),
    storyFlag:false,
    setStoryFlag:()=>set((state)=>({storyFlag:!state.storyFlag})),
    story:[],
    addStory: (stories) => set((state) => ({ story: [...state.story,stories] })),
    posts: [ ],
    addPosts: (preview) => set((state) => ({ posts: [...state.posts,preview] })),
    reels:[ ],
    addReels:(reel)=>set((state)=>({reels:[...state.reels,reel]})),
  }))
  

  export default useBearStore;