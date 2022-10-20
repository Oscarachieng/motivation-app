class ArticleCommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :likes
end
