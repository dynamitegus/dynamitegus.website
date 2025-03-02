import { Client } from "@notionhq/client";

export default function NotionData() {
  const notion = new Client({
    auth: import.meta.env.NOTION_TOKEN,
  });

  return (
    <div>
      <h1>Notion Data</h1>
      <h3>
        {" "}
        {(async () => {
          const databaseId = "19e59c22f5d480e5864aebacc06a32d0";
          const res = await notion.databases.query({
            database_id: databaseId,
            //sorts: [
            //  {
            //    property: "Item",
            //    direction: "ascending",
            //  },
            //],
          }).then((res) => {
            console.log(res.results); 
            return res.results;  
          });
          return res;
        })()}{" "}
      </h3>
    </div>
  );
}
