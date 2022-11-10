class Video < ApplicationRecord
    has_one_attached :video
    validates :title,:video,:is_approved,:likes,:is_flagged,:user_id,:category_id, presence: true
    validates :title, uniqueness: true
    has_many :video_comments
    belongs_to :user
    belongs_to :category
end
