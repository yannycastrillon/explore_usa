class RenameUsersColumnStrategy < ActiveRecord::Migration
  def change
    rename_column :users, :strategy, :state
  end
end
