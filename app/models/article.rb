class Article < ApplicationRecord
    validates :title, :content,:is_approved,:likes,:category_id,:user_id, presence: true
    validates :content,length:{minimum: 250}
    validates :title, uniqueness: true
    has_many :article_comments, dependent: :destroy
    belongs_to :user
    belongs_to :category
end
