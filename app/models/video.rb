class Video < ApplicationRecord
    validates :title,:content,:is_approved,:likes,:is_flagged
    has_many :video_comments
end
