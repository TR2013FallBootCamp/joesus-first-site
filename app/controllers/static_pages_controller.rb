class StaticPagesController < ApplicationController
  def home
  end

  def about
  	flash.now[:once] = "Once"
  end
end
