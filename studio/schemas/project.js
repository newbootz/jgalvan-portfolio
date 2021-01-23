export default {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        {     
            name: "title",
            type: "string",
        },
        {
            name: "date",
            type: "datetime"
        },
        {
            name: "place",
            type: "string",
        },
        {
            name: "description",
            type: "text",
        },
        {
            name: "projectType",
            title: "Project type",
            type: "string",
            options: {
                list: [
                    { value: "personal", title: "Personal"},
                    { value: "client", title: "Client" },
                    { value: "school", title: "School"},
                ]
            }
        },
        {
            name: "link",
            type: "url"
        },
        {
            name: "github",
            type: "url"
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name: "tags",
            type: "array",
            of: [
                {
                    type: "string",
                },
            ],
            options: {
                layout: "tags",
            },
        },
    ],
    preview: {
        select: {
          title: 'title',
          media: 'image',
        },
      },
}