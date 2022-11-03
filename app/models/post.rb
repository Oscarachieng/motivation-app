class Post < ApplicationRecord
    validates :title, :content,:is_approved,:likes,:is_flagged,:content_type,:category_id,:user_id, presence: true
    validates :content,length:{minimum: 2}
    validates :title, uniqueness: true
    has_many :post_comments
    # belongs_to :user
    belongs_to :category
end
