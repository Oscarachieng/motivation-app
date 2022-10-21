class ArticleSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :is_approved, :likes, :is_flagged
  has_many :article_comments
end
