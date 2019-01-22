class ReactController < ActionController::Base
  def index
    render file: Rails.root.join('index.html')
  end
end
