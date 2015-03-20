"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var BaseComponent = (function () {
	function BaseComponent() {
		_classCallCheck(this, BaseComponent);

		this.components = [];
	}

	_createClass(BaseComponent, {
		update: {
			value: function update() {}
		},
		getType: {
			value: function getType() {
				return this.constructor.name;
			}
		},
		getComponentByType: {
			value: function getComponentByType(type) {
				return _.find(this.components, function (component) {
					return component.getType() == type;
				});
			}
		},
		getComponentsByType: {
			value: function getComponentsByType(type) {
				var components = _.reduce(this.components, function (list, component) {
					return list.concat(component.getComponentsByType(type));
				}, []);
				if (this.getType() == type) {
					components.push(this);
				}
				return components;
			}
		},
		getComponentsByName: {
			value: function getComponentsByName(name) {
				var entities = [];
				if (this.name == name) {
					entities.push(this);
				}

				return _.reduce(this.components, function (list, component) {
					return list.concat(component.getComponentsByName(name));
				}, entities);
			}
		},
		addComponent: {
			value: function addComponent() {
				for (var _len = arguments.length, components = Array(_len), _key = 0; _key < _len; _key++) {
					components[_key] = arguments[_key];
				}

				_.each(components, function (component) {
					component.parent = this;
					this.components.push(component);
				}, this);
			}
		},
		removeComponent: {
			value: function removeComponent(component) {
				this.components = _.without(this.components, component);
			}
		},
		updateComponents: {
			value: function updateComponents(timeElapsed, now) {
				this.update(timeElapsed);
				_.invoke(this.components, "updateComponents", timeElapsed, now);
			}
		}
	});

	return BaseComponent;
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2VDb21wb25lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQU0sYUFBYTtBQUNQLFVBRE4sYUFBYSxHQUNKO3dCQURULGFBQWE7O0FBRWpCLE1BQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0VBQ3JCOztjQUhJLGFBQWE7QUFLbEIsUUFBTTtVQUFBLGtCQUFHLEVBQUU7O0FBRVgsU0FBTztVQUFBLG1CQUFHO0FBQ1QsV0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztJQUM3Qjs7QUFFRCxvQkFBa0I7VUFBQSw0QkFBQyxJQUFJLEVBQUU7QUFDeEIsV0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsVUFBUyxTQUFTLEVBQUU7QUFDbEQsWUFBTyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDO0tBQ25DLENBQUMsQ0FBQztJQUNIOztBQUVELHFCQUFtQjtVQUFBLDZCQUFDLElBQUksRUFBRTtBQUN6QixRQUFJLFVBQVUsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsVUFBUyxJQUFJLEVBQUUsU0FBUyxFQUFFO0FBQ3BFLFlBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztLQUN4RCxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ1AsUUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksSUFBSSxFQUFFO0FBQzNCLGVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDdEI7QUFDRCxXQUFPLFVBQVUsQ0FBQztJQUNsQjs7QUFFRCxxQkFBbUI7VUFBQSw2QkFBQyxJQUFJLEVBQUU7QUFDekIsUUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ2xCLFFBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUU7QUFDdEIsYUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNwQjs7QUFFRCxXQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxVQUFTLElBQUksRUFBRSxTQUFTLEVBQUU7QUFDMUQsWUFBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0tBQ3hELEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDYjs7QUFFRCxjQUFZO1VBQUEsd0JBQWdCO3NDQUFaLFVBQVU7QUFBVixlQUFVOzs7QUFDekIsS0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsVUFBUyxTQUFTLEVBQUU7QUFDdEMsY0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFDeEIsU0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDaEMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNUOztBQUVELGlCQUFlO1VBQUEseUJBQUMsU0FBUyxFQUFFO0FBQzFCLFFBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3hEOztBQUVELGtCQUFnQjtVQUFBLDBCQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUU7QUFDbEMsUUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUN6QixLQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsa0JBQWtCLEVBQUUsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2hFOzs7O1FBcERJLGFBQWEiLCJmaWxlIjoiYmFzZUNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEJhc2VDb21wb25lbnQge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmNvbXBvbmVudHMgPSBbXTtcblx0fVxuXG5cdHVwZGF0ZSgpIHt9XG5cblx0Z2V0VHlwZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuXHR9XG5cblx0Z2V0Q29tcG9uZW50QnlUeXBlKHR5cGUpIHtcblx0XHRyZXR1cm4gXy5maW5kKHRoaXMuY29tcG9uZW50cywgZnVuY3Rpb24oY29tcG9uZW50KSB7XG5cdFx0XHRyZXR1cm4gY29tcG9uZW50LmdldFR5cGUoKSA9PSB0eXBlO1xuXHRcdH0pO1xuXHR9XG5cblx0Z2V0Q29tcG9uZW50c0J5VHlwZSh0eXBlKSB7XG5cdFx0dmFyIGNvbXBvbmVudHMgPSBfLnJlZHVjZSh0aGlzLmNvbXBvbmVudHMsIGZ1bmN0aW9uKGxpc3QsIGNvbXBvbmVudCkge1xuXHRcdFx0cmV0dXJuIGxpc3QuY29uY2F0KGNvbXBvbmVudC5nZXRDb21wb25lbnRzQnlUeXBlKHR5cGUpKTtcblx0XHR9LCBbXSk7XG5cdFx0aWYgKHRoaXMuZ2V0VHlwZSgpID09IHR5cGUpIHtcblx0XHRcdGNvbXBvbmVudHMucHVzaCh0aGlzKTtcblx0XHR9XG5cdFx0cmV0dXJuIGNvbXBvbmVudHM7XG5cdH1cblxuXHRnZXRDb21wb25lbnRzQnlOYW1lKG5hbWUpIHtcblx0XHR2YXIgZW50aXRpZXMgPSBbXTtcblx0XHRpZiAodGhpcy5uYW1lID09IG5hbWUpIHtcblx0XHRcdGVudGl0aWVzLnB1c2godGhpcyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIF8ucmVkdWNlKHRoaXMuY29tcG9uZW50cywgZnVuY3Rpb24obGlzdCwgY29tcG9uZW50KSB7XG5cdFx0XHRyZXR1cm4gbGlzdC5jb25jYXQoY29tcG9uZW50LmdldENvbXBvbmVudHNCeU5hbWUobmFtZSkpO1xuXHRcdH0sIGVudGl0aWVzKTtcblx0fVxuXG5cdGFkZENvbXBvbmVudCguLi5jb21wb25lbnRzKSB7XG5cdFx0Xy5lYWNoKGNvbXBvbmVudHMsIGZ1bmN0aW9uKGNvbXBvbmVudCkge1xuXHRcdFx0Y29tcG9uZW50LnBhcmVudCA9IHRoaXM7XG5cdFx0XHR0aGlzLmNvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuXHRcdH0sIHRoaXMpO1xuXHR9XG5cblx0cmVtb3ZlQ29tcG9uZW50KGNvbXBvbmVudCkge1xuXHRcdHRoaXMuY29tcG9uZW50cyA9IF8ud2l0aG91dCh0aGlzLmNvbXBvbmVudHMsIGNvbXBvbmVudCk7XG5cdH1cblxuXHR1cGRhdGVDb21wb25lbnRzKHRpbWVFbGFwc2VkLCBub3cpIHtcblx0XHR0aGlzLnVwZGF0ZSh0aW1lRWxhcHNlZCk7XG5cdFx0Xy5pbnZva2UodGhpcy5jb21wb25lbnRzLCAndXBkYXRlQ29tcG9uZW50cycsIHRpbWVFbGFwc2VkLCBub3cpO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9