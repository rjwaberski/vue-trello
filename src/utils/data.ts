export const getInitialData = () => ({
  columns: [
    {
      name: "backlog",
      items: [
        {
          name: "Make a portfolio website",
          content: "do it",
          created: new Date(),
          id: "1234"
        },
        {
          name: "Change job",
          content: "also do it",
          created: new Date(),
          id: "33"
        }
      ]
    },
    {
      name: "todo",
      items: []
    },
    {
      name: "in progress",
      items: [
        {
          name: "Vue kanban board project",
          content: "already doing it",
          created: new Date(),
          id: "12345"
        }
      ]
    },
    {
      name: "done",
      items: []
    }
  ]
});
