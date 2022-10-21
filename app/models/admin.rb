class Admin < ApplicationRecord
    #validations for the admin model
    validates_presence_of :first_name, :last_name, :password
    validates :password, length: { minimu:12, maximum: 24}
   
    
   
end
