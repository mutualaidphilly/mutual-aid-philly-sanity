export default {
  title: "Navigation",
  name: "navigation",
  type: "document",
  fields: [
    {
      title: "Main navigation",
      name: "mainNavigation",
      description: "Select pages for the top menu",
      validation: (Rule) => [
        Rule.max(5).warning("Are you sure you want more than 5 items?"),
        Rule.unique().error("You have duplicate menu items"),
      ],
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "route" }],
        },
      ],
    },

    {
      title: "Main Call To Action Link",
      name: "mainCTA",
      description: "Add URLS for main call to actions",
      type: "link",
    },
    {
      title: "Secondary Call To Action Links",
      name: "secondaryCTAs",
      description: "Add URLS for main call to actions",
      validation: (Rule) => [
        Rule.unique().error("You have duplicate menu items"),
      ],
      type: "array",
      of: [
        {
          type: "link",
        },
      ],
    },
  ],
};
