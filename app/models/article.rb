class Article < ApplicationRecord
    validates :title, :content,:is_approved,:likes,:is_flagged, presence: true
    validates :content,length:{minimum: 250}
    validates :title, uniqueness: true
    has_many :article_comments
    belongs_to :user
    belongs_to :category
end
