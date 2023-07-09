export const navitems = [
    
    {
        id:0,
        path: "/",
        name: "Home",
        
    },
   
    {
        id:2,
        path: "/blogs",
        name: "Blogs",
       
    },
    {
        id:3,
        path: "/jobs",
        name: "Jobs",
       
        exact: true,
        subRoutes: [
            
            {
                id:4,
                path: "/profile",
                name: "Profile",
               
            }
        ],
    },
    
    
   
];