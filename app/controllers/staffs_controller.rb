class StaffsController < ApplicationController

    def index 
        staff = Staff.all 
        render json: staff
        
    end
    
end
