let internalObject = { records: [], maxCount: 5 },
	notifyObject = $({ nodeName: 'INTERNAL' }),
	loadRecords = function() {
		let id = internalObject.records.length;
		if (id < internalObject.maxCount) {
			internalObject.records.push({
				description: 'Record id ' + id,
				value: Math.floor(Math.random() * 5000)
			});
			setTimeout(loadRecords, Math.floor(Math.random * 10000));
		} else {
			$(notifyObject).trigger('recordsloaded', internalObject);
		}
	};
export { loadRecords, internalObject, notifyObject };
