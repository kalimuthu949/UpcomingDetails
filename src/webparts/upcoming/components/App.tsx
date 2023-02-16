import * as React from 'react';
import styles from './Upcoming.module.scss';
import { sp } from "@pnp/sp/presets/all";
export default function App(props)
{
    
    const[data,setdata]=React.useState("");

    React.useEffect(function(){
        Init();
    },[]);

    async function Init()
    {
        await sp.web.lists.getByTitle("UpcomingDetails").items.top(1).get().then(function(data)
        {
              if(data.length>0)
              {
                setdata(data[0].Content);
              }
        }).catch(function(error){
            console.log(error);
        })
    }
    
    return(<div><div className={styles.industryNews}>
        <h3>{props.Title}</h3>
        <div className={styles.subTitleSection}>
        <div
                  dangerouslySetInnerHTML={{ __html: data }}
                />
        </div>
      </div></div>)
}