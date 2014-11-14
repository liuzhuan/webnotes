package {
	public function shuffle(arr:Array):Array {
		return arr.sort(randomSort);
		
		function randomSort(a:*, b:*):Number {
			return Math.random() * 2 - 1;
		}
	}
}