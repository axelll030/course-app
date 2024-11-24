module.exports = (sequelize, dataTypes) => {
  const Posts = sequelize.define("Posts", {
    title: { type: dataTypes.STRING, allowNull: false },
    postText: { type: dataTypes.STRING, allowNull: false },
    userName: { type: dataTypes.STRING, allowNull: false },
  });

  // create a link
  Posts.associate = (models) => {
    Posts.hasMany(models.Comments, {
      onDelete: "cascade",
    });
  };
  return Posts;
};
